export default function Closing() {
  return (
    <section id="contact" className="relative w-full py-28 md:py-36 px-6 bg-[#0a0a08]">
      <div className="max-w-2xl mx-auto text-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-white/60"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', fontWeight: 500 }}
        >
          Now booking 2026
        </span>

        <h2
          className="mt-6 text-[clamp(2rem,4.6vw,3rem)] leading-[1.12] tracking-[-0.02em] text-white"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
        >
          The scroll ends here.
          <br />
          The stay doesn&rsquo;t have to.
        </h2>

        <p className="mt-5 text-white/60 text-[15px] md:text-[16px] leading-[1.7] max-w-md mx-auto" style={{ fontWeight: 400 }}>
          One villa, one party at a time. Come see the rest of the view in
          person.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="mailto:hello@touristhouse.com?subject=Stay%20at%20Tourist%20House"
            className="inline-flex items-center px-7 py-3.5 rounded-full text-[14px] font-medium text-[#0a0a08] transition-all duration-200 hover:brightness-105"
            style={{ background: '#e7d9b8', boxShadow: '0 10px 28px -10px rgba(231,217,184,0.4)' }}
          >
            Reserve Your Stay
          </a>
          <a
            href="#villa"
            className="inline-flex items-center px-7 py-3.5 rounded-full text-[14px] font-medium text-white transition-all duration-200 hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.22)' }}
          >
            Scroll Back Up
          </a>
        </div>
      </div>
    </section>
  )
}
