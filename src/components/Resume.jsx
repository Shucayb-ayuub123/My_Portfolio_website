import { FiDownload, FiFileText } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

export default function Resume() {
  const sectionRef = useScrollReveal()

  return (
    <section id="resume" className="resume section" ref={sectionRef}>
      <div className="container">
        <div className="resume-content animate-on-scroll">
          <div className="resume-icon">
            <FiFileText size={40} />
          </div>
          <h2 className="section-title">Download My Resume</h2>
          <p className="resume-text">
            Get a comprehensive overview of my skills, experience, and qualifications.
          </p>
          <a href="./Resume.pdf" download className="btn btn-primary resume-btn">
            <FiDownload size={18} />
            Download CV
          </a>
          <p className="resume-note">PDF format • Updated May 2026</p>
        </div>
      </div>
    </section>
  )
}
