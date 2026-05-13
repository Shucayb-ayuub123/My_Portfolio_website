import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiBriefcase } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Portfolio</h3>
            <p className="footer-text">
              Building digital experiences that make a difference. Always open to new opportunities and collaborations.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Shucayb-ayuub123" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedin size={18} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Upwork">
                <FiBriefcase size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="footer-link" onClick={(e) => {
                    e.preventDefault()
                    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
                  }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-links-title">Contact</h4>
            <p>shucayb594@gmail.com</p>
            <p>+252 637833207</p>
            <p>Hargeisa  , somaliland</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart size={14} className="heart-icon" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  )
}
