import './About.css';


export default function About() {
  const skills = [
    {
      icon: '/react.svg', name: 'React', level: 90, category: 'frontend'
    },
    { icon: '/javascript.svg', name: 'JavaScript', level: 95, category: 'language' },
    { icon: '/html.svg', name: 'HTML', level: 95, category: 'frontend' },
    { icon: '/css.svg', name: 'CSS', level: 90, category: 'frontend' },
    { icon: '/nodejs.svg', name: 'Node.js', level: 75, category: 'backend' },
    { icon: '/expressjs.svg', name: 'Express.js', level: 85, category: 'backend' },
    { icon: '/mongodb.svg', name: 'MongoDB', level: 80, category: 'database' },
    { icon: '/mysql.svg', name: 'SQL', level: 75, category: 'database' },
    { icon: '/java.svg', name: 'Java', level: 70, category: 'language' }
  ];

  const experiences = [
    {
      title: "BookFinder Platform",
      description: "Built a comprehensive book discovery application with search functionality, advanced filtering, and integration with Open Library API.",
      technologies: ["React", "JavaScript", "CSS", "API Integration"]
    },
    {
      title: "MERN Stack Projects",
      description: "Developed full-stack web applications using MongoDB, Express.js, React, and Node.js with responsive design and modern UI/UX.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"]
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">MERN Stack Developer</p>
        </div>

        <div className="about-content">
          <div className="about-intro">
            <div className="intro-text">
              <h3>Hello! I'm Sameeruddin Ansari</h3>
              <p>
                I'm a passionate <strong>MERN Stack Developer</strong> with expertise in building
                modern, scalable web applications. I love creating digital solutions that combine
                beautiful user interfaces with robust backend functionality.
              </p>
              <p>
                My journey in web development has led me to master the MERN stack (MongoDB, Express.js,
                React, Node.js) along with other essential technologies. I'm constantly learning and
                adapting to new technologies to stay current with industry trends.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source
                projects, and building applications that solve real-world problems.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills
              <p>
                My expertise in modern web development technologies and tools
              </p>
            </h3>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className={`skill-item ${skill.category}`}>
                  <div className="skill-header">
                    <div className="skill-name-with-icon">
                      {skill.icon && (
                        <img src={skill.icon} alt={skill.name} width={25} />
                      )}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>


                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-section">
            <h3>Featured Projects</h3>
            <div className="experience-grid">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <h4>{exp.title}</h4>
                  <p>{exp.description}</p>
                  <div className="tech-stack">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}