import './index.css'
import Navbar from './components/Navbar'
import Scrollymation from './components/Scrollymation'
import Closing from './components/Closing'

function App() {
  return (
    <main className="relative bg-[#0a0a08]">
      <Navbar />
      <Scrollymation />
      <section id="amenities" className="relative border-t border-white/10 bg-[#e9e4d8] px-6 py-24 text-[#171711] md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <span className="text-[11px] uppercase tracking-[0.24em] text-[#787465]">A slower kind of stay</span>
            <h2 className="mt-5 max-w-xl text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>Room to breathe.<br />Space to belong.</h2>
          </div>
          <p className="max-w-lg text-base leading-7 text-[#555247] md:justify-self-end">A private hillside home made for long lunches, saltwater afternoons, and mornings that don’t need a plan. Every stay is yours alone.</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-[#171711]/10 bg-[#171711]/10 md:grid-cols-3">
          {[
            ['01', 'The great room', 'Open living that flows straight out to the terrace.'],
            ['02', 'The infinity pool', 'A quiet edge between the garden and the Caribbean.'],
            ['03', 'Your own villa', 'Thoughtful, private hosting for one party at a time.'],
          ].map(([number, title, copy]) => <article key={number} className="bg-[#e9e4d8] p-7 md:p-9"><span className="text-xs text-[#8d8778]">{number}</span><h3 className="mt-10 text-xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{title}</h3><p className="mt-3 text-sm leading-6 text-[#625e53]">{copy}</p></article>)}
        </div>
      </section>
      <section id="journal" className="grid min-h-[360px] grid-cols-1 items-center gap-8 bg-[#171711] px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
        <span className="text-[11px] uppercase tracking-[0.24em] text-[#e7d9b8]/70">Field notes · Soufrière</span>
        <blockquote className="max-w-2xl text-3xl leading-tight tracking-[-0.03em] text-white md:text-5xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>“The best part of the island is the part you don’t have to leave.”</blockquote>
      </section>
      <Closing />
    </main>
  )
}

export default App
