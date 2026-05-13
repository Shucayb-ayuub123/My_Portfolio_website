import { FiExternalLink, FiGithub } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Student Portal',
    description: 'A comprehensive web portal for students featuring course registration, grade tracking, attendance management, and communication tools between students and faculty.',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    github: '#',
    live: '#',
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
    tech: ['React', 'Node.js', 'Mysql'],
    github: 'https://github.com/Shucayb-ayuub123/Task_Manager',
    live: 'https://todo-app-klcq.vercel.app/',
    color: '#d97706',
  },
]

export default function Projects() {
  const sectionRef = useScrollReveal()

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

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className="project-card animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
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
      </div>
    </section>
  )
}
