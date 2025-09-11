import './Hero.css';

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1_Wnx9MJH0WBXTyp66YnbX6oJ7ewhM8GA/view?usp=sharing';
    link.download = 'Sameeruddin_Ansari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Sameeruddin Ansari</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create beautiful, responsive web applications with modern technologies.
              Passionate about clean code, user experience, and bringing ideas to life.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={handleDownloadCV}
              >
                Download CV
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleContactClick}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-illustration">
              <div className="illustration-circle"></div>
              <div className="illustration-dots"></div>
              <div className="illustration-shape"></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
}