import { FiBriefcase } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const experiences = [
  {
    role: 'Full-Stack Developer (Freelance)',
    company: 'Self-Employed',
    period: '2024 - Present',
    description: 'Developed and deployed custom web applications for clients. Built responsive frontends with React and robust backends with Node.js. Managed database design, API development, and cloud deployment.',
  },
  {
    role: 'Web Development Intern',
    company: 'Tech Company',
    period: '2023 - 2024',
    description: 'Collaborated on building internal tools and client-facing applications. Contributed to code reviews, wrote unit tests, and participated in agile development processes.',
  },
  {
    role: 'University Project Lead',
    company: 'University',
    period: '2023',
    description: 'Led a team of 4 developers in building a Student Portal and Library Management System. Designed the system architecture, database schema, and coordinated development sprints.',
  },
]

export default function Experience() {
  const sectionRef = useScrollReveal()

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Work History</h2>
          <p className="section-subtitle">
            My professional journey and the experiences that shaped my skills
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item animate-on-scroll" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="timeline-dot">
                <FiBriefcase size={16} />
              </div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
