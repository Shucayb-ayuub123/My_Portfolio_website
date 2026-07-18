import { useState, useRef } from 'react'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Auth MERN Project',
    description: 'A full-stack authentication application developed using MongoDB, Express.js, React, and Node.js. It provides secure user authentication with JWT, email verification via OTP, password recovery, and protected dashboard access.', tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    live: 'https://authentifications-7651.vercel.app/',
    color: '#2563eb',
  },
  {
    title: 'rental car',
    description: 'Full-stack library management solution with book cataloging, borrower tracking, fine calculation, and automated notification system for due dates.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    live: '#',
    color: '#7c3aed',
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product management, shopping cart, payment integration, order tracking, and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'Mysql', 'Stripe'],
    github: 'https://github.com/Shucayb-ayuub123/shopmate-express',
    live: 'https://shopmate-express.vercel.app/',
    color: '#059669',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, task assignment, progress tracking, and team communication features.',
    tech: ['React', 'Node.js', 'Postgres'],
    github: 'https://github.com/Shucayb-ayuub123/Task_Manager',
    live: 'https://task-manager-with-drizzle.vercel.app/',
    color: '#d97706',
  },
]

export default function Projects() {
  const sectionRef = useScrollReveal()
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const scrollTo = (index) => {
    if (!sliderRef.current) return
    const card = sliderRef.current.children[index]
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setCurrentIndex(index)
    }
  }

  const handleScroll = () => {
    if (!sliderRef.current) return
    const container = sliderRef.current
    const cardWidth = container.children[0]?.offsetWidth || 1
    const gap = 32
    const scrollLeft = container.scrollLeft
    const index = Math.round(scrollLeft / (cardWidth + gap))
    setCurrentIndex(Math.min(index, projects.length - 1))
  }

  const next = () => scrollTo(Math.min(currentIndex + 1, projects.length - 1))
  const prev = () => scrollTo(Math.max(currentIndex - 1, 0))

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A showcase of my best projects demonstrating my skills and expertise
          </p>
        </div>

        <div className="projects-slider-wrapper animate-on-scroll">
          <button className="slider-btn slider-btn-left" onClick={prev} aria-label="Previous project">
            <FiChevronLeft size={24} />
          </button>

          <div className="projects-slider" ref={sliderRef} onScroll={handleScroll}>
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-image" style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}>
                  <div className="project-image-icon" style={{ background: project.color }}>
                    {project.title.charAt(0)}
                  </div>
                  <div className="project-overlay">
                    <a href={project.github} className="project-overlay-link" aria-label="GitHub">
                      <FiGithub size={20} />
                    </a>
                    <a href={project.live} className="project-overlay-link" aria-label="Live demo">
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t, j) => (
                      <span key={j} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <FiGithub size={16} />
                      Code
                    </a>
                    <a href={project.live} className="project-link">
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn slider-btn-right" onClick={next} aria-label="Next project">
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`slider-dot${i === currentIndex ? ' active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
