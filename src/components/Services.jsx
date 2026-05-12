import { FiMonitor, FiLayout, FiServer, FiDatabase } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const services = [
  {
    icon: <FiMonitor size={32} />,
    title: 'Web Development',
    description: 'Building responsive, performant websites and web applications using modern frameworks and best practices.',
  },
  {
    icon: <FiLayout size={32} />,
    title: 'Frontend Development',
    description: 'Creating intuitive users interfaces with React, ensuring seamless user experiences across all devices.',
  },
  {
    icon: <FiServer size={32} />,
    title: 'Backend APIs',
    description: 'Designing and implementing scalable RESTful APIs and microservices with Node.js and Express.',
  },
  {
    icon: <FiDatabase size={32} />,
    title: 'Database Design',
    description: 'Architecting efficient database schemas and optimizing queries for performance and scalability.',
  },
]

export default function Services() {
  const sectionRef = useScrollReveal()

  return (
    <section id="services" className="services section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Services</span>
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle">
            Professional services I offer to help bring your digital projects to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
