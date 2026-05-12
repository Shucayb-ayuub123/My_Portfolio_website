import { FiBookOpen, FiAward } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    period: '2021 - 2025',
    coursework: ['Data Structures & Algorithms', 'Web Development', 'Database Systems', 'Software Engineering', 'Operating Systems', 'Computer Networks'],
  },
  {
    degree: 'Relevant Certifications',
    school: 'Various Platforms',
    period: '2023 - 2024',
    coursework: ['Meta Front-End Developer', 'AWS Cloud Practitioner', 'MongoDB Associate Developer', 'Google IT Automation'],
  },
]

export default function Education() {
  const sectionRef = useScrollReveal()

  return (
    <section id="education" className="education section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My educational journey and professional certifications
          </p>
        </div>

        <div className="education-grid animate-on-scroll">
          {education.map((edu, i) => (
            <div key={i} className="education-card" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="education-icon">
                {i === 0 ? <FiBookOpen size={24} /> : <FiAward size={24} />}
              </div>
              <div className="education-period">{edu.period}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-school">{edu.school}</h4>
              <div className="education-coursework">
                <span className="coursework-label">Coursework:</span>
                <div className="coursework-tags">
                  {edu.coursework.map((course, j) => (
                    <span key={j} className="coursework-tag">{course}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
