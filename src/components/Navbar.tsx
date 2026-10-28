import { useState } from 'react'

const navLinks = [
  { label: 'The problem', href: '#problem' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Designed for', href: '#built-for' },
]

function FoldMark() {
  return (
    <svg width="31" height="31" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="26" height="22" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 5v22M20.5 5v22M3 16h26" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
      <circle cx="16" cy="16" r="2.1" fill="currentColor" />
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Quick-Fold home">
        <FoldMark />
        <span>quick<span className="brand-dash">-</span>fold<small>LAUNDRY, SORTED.</small></span>
      </a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span />
      </button>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Main navigation">
        {navLinks.map((link) => <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>)}
        <a className="nav-cta" href="#how-it-works" onClick={closeMenu}>Meet your new method <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
