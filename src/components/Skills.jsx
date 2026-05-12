import { useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML/CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'Figma'],
  },
]

const allSkills = [
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'MySQL', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Git', level: 90 },
  { name: 'Docker', level: 70 },
]

export default function Skills() {
  const sectionRef = useScrollReveal()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.skill-bar-fill').forEach((bar, i) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.width
            }, i * 100)
          })
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionRef])

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills-grid animate-on-scroll">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-category animate-on-scroll">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-bars animate-on-scroll">
          <h3 className="skills-bars-title">Proficiency</h3>
          <div className="skills-bars-grid">
            {allSkills.map((skill, i) => (
              <div key={i} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">{skill.name}</span>
                  <span className="skill-bar-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    data-width={`${skill.level}%`}
                    style={{ width: 0 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
