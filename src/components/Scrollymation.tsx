import { useEffect, useRef, useState } from 'react'

const FRAME_COUNT = 534
const SCROLL_LENGTH_VH = 700 // total scroll distance for the whole sequence
const INTRO_FADE_END = 0.035 // intro copy is gone by this progress
const MID_BEAT_CENTER = 300 / (FRAME_COUNT - 1) // frame 300 = the moment the camera enters the villa
const MID_BEAT_WIDTH = 0.045
const ARRIVAL_START = 0.94 // final "Your View Awaits" beat

const framePath = (i: number) => `${import.meta.env.BASE_URL}frames/frame-${String(i).padStart(4, '0')}.jpg`

function ramp(x: number, a: number, b: number) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
// A symmetric bump that rises then falls back to 0 — for the brief mid-scroll label.
function bump(x: number, center: number, width: number) {
  const t = Math.abs(x - center) / width
  return t >= 1 ? 0 : 1 - t * t * (3 - 2 * t)
}

export default function Scrollymation() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const arrivalRef = useRef<HTMLDivElement>(null)

  const imagesRef = useRef<HTMLImageElement[]>([])
  const drawnFrameRef = useRef(-1)
  const tickingRef = useRef(false)
  const loadedCountRef = useRef(0)

  const [progressPct, setProgressPct] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return
    const ctx = canvas.getContext('2d')!
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'medium'

    let destRect = { dx: 0, dy: 0, dw: 0, dh: 0 }
    let disposed = false

    function computeRect() {
      const w = canvas!.clientWidth
      const h = canvas!.clientHeight
      const img = imagesRef.current[0]
      const ir = img && img.naturalWidth ? img.naturalWidth / img.naturalHeight : 16 / 9
      const cr = w / h
      if (cr > ir) destRect = { dw: w, dh: w / ir, dx: 0, dy: (h - w / ir) / 2 }
      else destRect = { dh: h, dw: h * ir, dy: 0, dx: (w - h * ir) / 2 }
    }

    function drawFrame(index: number) {
      const img = imagesRef.current[index]
      if (!img || !img.complete || img.naturalWidth === 0) return
      drawnFrameRef.current = index
      const { dx, dy, dw, dh } = destRect
      ctx.clearRect(0, 0, canvas!.clientWidth, canvas!.clientHeight)
      ctx.drawImage(img, dx, dy, dw, dh)
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25)
      const w = window.innerWidth
      const h = window.innerHeight
      canvas!.width = Math.round(w * dpr)
      canvas!.height = Math.round(h * dpr)
      canvas!.style.width = w + 'px'
      canvas!.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'medium'
      computeRect()
      drawFrame(Math.max(0, drawnFrameRef.current))
    }

    function syncText(progress: number) {
      if (introRef.current) {
        const fade = 1 - Math.min(1, progress / INTRO_FADE_END)
        introRef.current.style.opacity = String(fade)
        introRef.current.style.transform = `translateY(${(1 - fade) * -20}px)`
        introRef.current.style.pointerEvents = progress > INTRO_FADE_END ? 'none' : 'auto'
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = String(1 - Math.min(1, progress / 0.015))
      }
      if (midRef.current) {
        midRef.current.style.opacity = String(bump(progress, MID_BEAT_CENTER, MID_BEAT_WIDTH))
      }
      if (arrivalRef.current) {
        arrivalRef.current.style.opacity = String(ramp(progress, ARRIVAL_START, 1))
      }
    }

    function update() {
      tickingRef.current = false
      const rect = section!.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0

      const frame = Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1)))
      if (frame !== drawnFrameRef.current) drawFrame(frame)
      syncText(progress)
    }

    function onScroll() {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(update)
    }

    // ---- Preload every frame, decoding before reveal ----
    const images: HTMLImageElement[] = new Array(FRAME_COUNT)
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.decoding = 'async'
      images[i] = img
    }
    imagesRef.current = images

    const progressInterval = window.setInterval(() => {
      setProgressPct(Math.round((loadedCountRef.current / FRAME_COUNT) * 100))
    }, 80)

    Promise.all(
      images.map((img, k) => {
        img.src = framePath(k + 1)
        return img
          .decode()
          .catch(() => new Promise<void>((res) => { img.onload = () => res(); img.onerror = () => res() }))
          .then(() => { loadedCountRef.current++ })
      })
    ).then(() => {
      if (disposed) return
      window.clearInterval(progressInterval)
      setProgressPct(100)
      resize()
      update()
      setReady(true)
    })

    window.addEventListener('resize', resize)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      disposed = true
      window.clearInterval(progressInterval)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div ref={sectionRef} id="villa" className="relative w-full" style={{ height: `${SCROLL_LENGTH_VH}vh` }}>
      <section className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a08]">
        {/* Preloader */}
        <div
          className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-[#0a0a08] transition-opacity duration-700"
          style={{ opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'auto' }}
        >
          <span
            className="text-white/85 text-[15px] tracking-[0.06em]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}
          >
            Preparing the approach
          </span>
          <div className="w-52 h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${progressPct}%`, background: '#e7d9b8', transition: 'width 0.15s ease' }}
            />
          </div>
          <span className="text-white/40 text-[12px] tabular-nums">{progressPct}%</span>
        </div>

        {/* Scroll-scrubbed frame sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block transition-opacity duration-700"
          style={{ opacity: ready ? 1 : 0 }}
        />

        {/* Legibility scrims */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/45 via-transparent to-black/55" />

        {/* Intro copy */}
        <div
          ref={introRef}
          className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16"
          style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}
        >
          <div className="max-w-lg">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/75"
              style={{ background: 'rgba(20,20,16,0.55)', border: '1px solid rgba(255,255,255,0.12)', fontWeight: 500 }}
            >
              St. Lucia, Private Villa
            </span>
            <h1
              className="mt-6 text-[clamp(2.3rem,5.4vw,3.75rem)] leading-[1.07] tracking-[-0.02em] text-white"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
            >
              An Island Villa,
              <br />
              One Scroll Away
            </h1>
            <p className="mt-5 text-white/70 text-[15px] md:text-[16.5px] leading-[1.72] max-w-md" style={{ fontWeight: 400 }}>
              Descend from the clouds, step through the great room, and arrive
              poolside&mdash;without leaving this page.
            </p>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-white/55 text-[11px] tracking-[0.22em] uppercase">Scroll to begin</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/50 animate-bounce">
            <path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Mid beat — appears as the camera crosses the threshold into the villa */}
        <div
          ref={midRef}
          className="absolute inset-x-0 bottom-14 z-10 flex justify-center pointer-events-none"
          style={{ opacity: 0 }}
        >
          <span
            className="text-white text-[13px] tracking-[0.28em] uppercase px-4 py-2 rounded-full"
            style={{ background: 'rgba(10,10,8,0.5)', border: '1px solid rgba(255,255,255,0.14)', fontWeight: 500 }}
          >
            Step Inside
          </span>
        </div>

        {/* Arrival beat — the final poolside reveal */}
        <div
          ref={arrivalRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-end text-center px-6 pb-20 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <span className="text-[11px] tracking-[0.4em] uppercase text-white/70" style={{ fontWeight: 500 }}>
            You have arrived
          </span>
          <h2
            className="mt-4 text-white text-[clamp(2.2rem,5.4vw,3.6rem)] leading-[1.05]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            Your View Awaits
          </h2>
        </div>
      </section>
    </div>
  )
}
