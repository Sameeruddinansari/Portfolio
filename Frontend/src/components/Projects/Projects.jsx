import './Projects.css';
import bookFinderImage from '../../assets/bookfinder.png';
import internet from '../../assets/internet.svg';
import github from '../../assets/github.svg';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "BookFinder",
      description: "A comprehensive book discovery platform that helps users explore millions of books with advanced search functionality, filtering options, and beautiful UI design.",
      image: bookFinderImage,
      technologies: ["React", "JavaScript", "CSS", "Open Library API", "Responsive Design"],
      liveUrl: "https://sameeruddinansari.github.io/BookFinder/",
      githubUrl: "https://github.com/sameeruddinansari/BookFinder",
      featured: true,
      features: [
        "Search millions of books by title, author, subject, and ISBN",
        "Advanced filtering system for refined search results",
        "Beautiful responsive design with dark/light theme",
        "Book details with ratings, cover images, and publication info",
        "Smooth user experience with modern UI components"
      ]
    }
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-subtitle">
            Showcasing my work in web development and innovative solutions
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="project-image"
                  onClick={() => handleProjectClick(project.liveUrl)}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <button
                      onClick={() => handleProjectClick(project.liveUrl)}
                      className="project-btn primary"
                    >
                      <img
                        src={internet}
                        alt="GitHub"
                        style={{ width: "20px", height: "20px" }}
                      />
                      Live Demo
                    </button>
                    <button
                      onClick={() => handleProjectClick(project.githubUrl)}
                      className="project-btn secondary"
                    >
                      <img className='git'
                        src={github}
                        alt="GitHub"
                        style={{ width: "20px", height: "20px", marginRight: "8px" }}
                      />
                      GitHub
                    </button>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>

                <p className="project-description">{project.description}</p>

                {project.features && (
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <button
                    onClick={() => handleProjectClick(project.liveUrl)}
                    className="action-btn primary"
                  >
                    View Live Project →
                  </button>
                  <button
                    onClick={() => handleProjectClick(project.githubUrl)}
                    className="action-btn secondary"
                  >
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="more-projects">
          <h3>More Projects Coming Soon!</h3>
          <p>I'm constantly working on new projects and learning new technologies. Stay tuned for more exciting developments!</p>
          <button
            onClick={() => handleProjectClick("https://github.com/sameeruddinansari")}
            className="github-btn"
          >
            Visit My GitHub →
          </button>
        </div>
      </div>
    </section>
  );
}