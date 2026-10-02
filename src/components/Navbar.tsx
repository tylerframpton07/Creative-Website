const navLinks = [
  { label: 'The Villa', href: '#villa' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

function Mark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20 12 4l9 16" stroke="#f4f2ec" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 20v-6.5l4-2.2 4 2.2V20" stroke="#f4f2ec" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
      <nav
        className="animate-fade-down relative flex items-center justify-between px-6 md:px-10 py-6"
        style={{ animationDelay: '0.15s' }}
      >
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <Mark />
          <span
            className="text-white text-[16.5px] tracking-[-0.01em]"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}
          >
            Tourist House
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11.5px] font-medium uppercase tracking-[0.14em] text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center px-5 py-2.5 rounded-full text-[13px] font-medium text-[#0a0a08] transition-all duration-200 hover:brightness-105"
          style={{ background: '#e7d9b8' }}
        >
          Reserve Your Stay
        </a>
      </nav>
    </header>
  )
}
