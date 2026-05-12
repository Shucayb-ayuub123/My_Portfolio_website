import { FiArrowDown, FiDownload, FiEye } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const sectionRef = useScrollReveal()

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      <div className="hero-content">
        <div className="hero-badge animate-on-scroll visible">
          <span className="badge-dot" />
          Available for work
        </div>

        <h1 className="hero-title animate-on-scroll visible">
          Hi, I'm{' '}
          <span className="gradient-text"> Shu'aib Mahamoud</span>
        </h1>

        <h2 className="hero-role animate-on-scroll visible">
          Full-Stack Developer
        </h2>

        <p className="hero-description animate-on-scroll visible">
          I build modern, scalable web applications with clean code and great user experiences.
          Passionate about turning complex problems into simple, elegant solutions.
        </p>

        <div className="hero-actions animate-on-scroll visible">
          <a href="#contact" className="btn btn-primary">
            Hire Me
          </a>
          <a href="#projects" className="btn btn-outline">
            <FiEye size={18} />
            View Projects
          </a>
          <a href="#resume" className="btn btn-gray">
            <FiDownload size={18} />
            Download CV
          </a>
        </div>

        <div className="hero-stats animate-on-scroll visible">
          <div className="stat">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Done</span>
          </div>
          <div className="stat">
            <span className="stat-number">10+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about" onClick={(e) => {
          e.preventDefault()
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
        }}>
          <FiArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}
