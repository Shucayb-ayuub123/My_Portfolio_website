import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiBriefcase } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Contact() {
  const sectionRef = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mdkwpnqo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="contact section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to build something great
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-on-scroll">
            <h3 className="contact-info-title">Let's talk about everything!</h3>
            <p className="contact-info-text">
              Feel free to reach out for collaborations, freelance projects, or just a friendly hello.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon"><FiMail size={18} /></div>
                <div>
                  <span className="contact-detail-label">Email</span>
                  <a href="#" className="contact-detail-value">shucayb594@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon"><FiPhone size={18} /></div>
                <div>
                  <span className="contact-detail-label">Phone</span>
                  <a href="#" className="contact-detail-value">+252 0637833207</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon"><FiMapPin size={18} /></div>
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">Hargeisa, somaliland</span>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <span className="contact-social-label">Social Links</span>
              <div className="contact-social-icons">
                <a href="https://github.com/Shucayb-ayuub123" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Upwork">
                  <FiBriefcase size={20} />
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
            {status === 'success' && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Project Collaboration"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="form-textarea"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : <>
                <FiSend size={16} />
                Send Message
              </>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
