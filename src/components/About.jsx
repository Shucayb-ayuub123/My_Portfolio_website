import { FiCode, FiBook, FiTarget } from 'react-icons/fi'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const sectionRef = useScrollReveal()

  const cards = [
    {
      icon: <FiCode size={28} />,
      title: 'Background',
      text: 'I am a Full-Stack Developer with a passion for building modern web applications. With a strong foundation in computer science and hands-on experience in diverse projects.',
    },
    {
      icon: <FiBook size={28} />,
      title: 'Education',
      text: 'Pursuing a degree in Computer Science with coursework in Data Structures, Algorithms, Web Development, Database Systems, and Software Engineering.',
    },
    {
      icon: <FiTarget size={28} />,
      title: 'Goals',
      text: 'Aiming to leverage my technical skills to build impactful software solutions. I am constantly exploring new technologies and best practices in web development.',
    },
  ]

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </div>

        <div className="about-grid animate-on-scroll">
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <img src="./ChatGPT Image Jul 18, 2026, 07_41_55 PM.png" alt="Profile" className="about-image" />
            </div>
            <div className="about-image-shape" />
          </div>

          <div className="about-content">
            <p className="about-bio">
              Hello! I'm a Full-Stack Developer with expertise in building modern web applications
              using React, Node.js, and cloud technologies. I specialize in creating responsive,
              user-friendly interfaces backed by robust server-side architectures.
            </p>
            <p className="about-bio">
              My journey in tech started during my university years where I built my first web
              application. Since then, I've worked on a variety of projects ranging from student
              portals to library management systems, constantly pushing the boundaries of my skills.
            </p>
            <p className="about-bio">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or writing technical articles to share knowledge with the
              developer community.
            </p>
          </div>
        </div>

        <div className="about-cards">
          {cards.map((card, i) => (
            <div key={i} className="about-card animate-on-scroll" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="about-card-icon">{card.icon}</div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
