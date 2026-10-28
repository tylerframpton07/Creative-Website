import Navbar from './components/Navbar'
import FoldDemo from './components/FoldDemo'
import Closing from './components/Closing'

const useCases = [
  {
    number: '01',
    title: 'Dorm life',
    text: 'Make a shared laundry room work harder. Bring your own folding surface, then pack it away when you’re done.',
    tag: 'COLLEGE STUDENTS',
  },
  {
    number: '02',
    title: 'Small-space living',
    text: 'Get a clean, repeatable fold without giving up the whole bed, table, or kitchen counter.',
    tag: 'CITY APARTMENTS',
  },
  {
    number: '03',
    title: 'Laundry for everyone',
    text: 'Keep a big family load moving with a simple rhythm that makes each folded stack feel more manageable.',
    tag: 'BUSY HOUSEHOLDS',
  },
]

function App() {
  return (
    <main className="site-shell" id="home">
      <Navbar />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> THE QUICK-FOLD LAUNDRY SORTING MAT</div>
          <h1 id="hero-title">Make room<br />for a <em>better fold.</em></h1>
          <p className="hero-lede">A faster, neater way through laundry day. Quick-Fold brings the folding surface, the guide, and the grip—so you can make a tidy stack almost anywhere.</p>
          <div className="hero-actions">
            <a className="button button-lime" href="#how-it-works">See how it folds <span aria-hidden="true">↗</span></a>
            <a className="text-button" href="#built-for">Made for small spaces <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-proof"><span className="proof-icon">✳</span><p>Less fuss at the end of the load.<br /><strong>More space for the rest of your day.</strong></p></div>
        </div>
        <div className="hero-product" aria-label="Illustration of the Quick-Fold folding mat">
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
          <div className="hero-product-kicker"><span>01 / THE EVERYDAY FOLD</span><span>QUICK-FOLD™</span></div>
          <div className="hero-art-card">
            <div className="art-card-label">A LITTLE MORE<br />ORDER, BUILT IN.</div>
            <FoldDemo compact />
            <div className="art-card-bottom"><span>FOLD. LATCH. LIFT.</span><span className="tiny-spark">✳</span></div>
          </div>
          <span className="hero-scribble" aria-hidden="true">good<br />things<br />fold</span>
          <span className="hero-caption">THE MAT THAT MEETS YOU WHERE YOU ARE</span>
        </div>
        <a className="hero-scroll" href="#problem"><span className="scroll-line" /> THE FOLDING PART, REIMAGINED</a>
        <span className="hero-index">01 — 04</span>
      </section>

      <section className="problem section-pad" id="problem">
        <div className="section-label"><span>01</span> THE PART THAT GETS PUT OFF</div>
        <div className="problem-grid">
          <h2>Laundry is done.<br /><span>Now comes the pile.</span></h2>
          <div className="problem-copy">
            <p>Folding is the slow, easy-to-skip last step. It takes space, takes time, and rarely leaves you with the same neat stack twice.</p>
            <p>Quick-Fold gives each garment a place to land and each fold a clear next move—without needing a bulky board or a perfect tabletop.</p>
          </div>
        </div>
        <div className="friction-row">
          <article><span>01</span><h3>No big surface?</h3><p>Use the mat where laundry happens: a dorm, a small apartment, or a shared laundry room.</p></article>
          <article><span>02</span><h3>Folds all over?</h3><p>Flexible panels guide the sequence toward a more consistent, compact stack.</p></article>
          <article><span>03</span><h3>Board too bulky?</h3><p>A portable folding surface is ready when you need it, then folds away between loads.</p></article>
        </div>
      </section>

      <section className="how section-pad" id="how-it-works">
        <div className="how-head">
          <div>
            <div className="section-label section-label-light"><span>02</span> THE QUICK-FOLD METHOD</div>
            <h2>Three moves.<br /><em>One less chore.</em></h2>
          </div>
          <p>Follow the panels in order. Magnetic latches help hold the fold in place, so the finished stack lifts cleanly from the mat.</p>
        </div>
        <FoldDemo />
      </section>

      <section className="features section-pad" id="details">
        <div className="features-intro">
          <div className="section-label"><span>03</span> THOUGHT THROUGH, FOLD BY FOLD</div>
          <h2>A simple idea.<br /><span>Useful details.</span></h2>
          <p>Quick-Fold is designed to make the final step feel less like a project and more like a repeatable part of the routine.</p>
        </div>
        <div className="feature-stack">
          <article className="feature-row"><span className="feature-symbol">↔</span><div><span className="feature-overline">FLEXIBLE PANELS</span><h3>Guided by design.</h3><p>Fold each panel over in sequence to create a uniform, compact result.</p></div><span className="feature-count">01</span></article>
          <article className="feature-row"><span className="feature-symbol">✳</span><div><span className="feature-overline">MAGNETIC LATCHES</span><h3>Held in the right place.</h3><p>Magnetic closures help keep each fold aligned while you finish the sequence.</p></div><span className="feature-count">02</span></article>
          <article className="feature-row"><span className="feature-symbol">⌁</span><div><span className="feature-overline">ANTI-SLIP SURFACE</span><h3>Clothes stay put.</h3><p>A grippy surface helps keep the garment in place as you fold.</p></div><span className="feature-count">03</span></article>
          <article className="feature-row"><span className="feature-symbol">⤢</span><div><span className="feature-overline">PORTABLE FORMAT</span><h3>Ready, then away.</h3><p>Use it at home, in a dorm, or in a shared laundry space. Fold it down between loads.</p></div><span className="feature-count">04</span></article>
        </div>
      </section>

      <section className="use-cases section-pad" id="built-for">
        <div className="use-head">
          <div className="section-label"><span>04</span> WHEREVER THE LAUNDRY LANDS</div>
          <h2>One less thing<br />to figure out.</h2>
        </div>
        <div className="use-grid">
          {useCases.map((item) => (
            <article className="use-card" key={item.number}>
              <div className={`use-card-art use-art-${item.number}`} aria-hidden="true"><span className="use-art-mark">QF</span><span className="use-art-spark">✳</span><span className="use-art-caption">FOLD ANYWHERE</span></div>
              <span className="use-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="use-number">{item.number}</span>
            </article>
          ))}
        </div>
        <p className="use-footnote">Also designed with travel, shared laundry, and gifting in mind.</p>
      </section>

      <Closing />
    </main>
  )
}

export default App
