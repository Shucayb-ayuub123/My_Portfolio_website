import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleClick(e, '#home')}>
          <span className="logo-text">Portfolio</span>
        </a>

        <div className={`nav-links${mobileOpen ? ' open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
              onClick={(e) => handleClick(e, href)}
            >
              {label}
            </a>
          ))}
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && <div className="nav-overlay" onClick={() => setMobileOpen(false)} />}
    </nav>
  )
}
