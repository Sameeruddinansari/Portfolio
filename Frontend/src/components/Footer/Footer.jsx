import './Footer.css';
import { Twitter, Linkedin, Instagram, Github, Mails, Phone, CircleUserRound } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/sameeruddinansari',
      icon: <Github />
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com',
      icon: <Linkedin />
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
      icon: <Twitter />
    },
    {
      name: 'Email',
      url: 'https://www.instagram.com',
      icon: <Instagram />
    }
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'MERN Stack',
    'API Development',
    'Responsive Design'
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              <h3>SameerUddin Ansari</h3>
              <p className="footer-tagline">MERN Stack Developer</p>
            </div>
            <p className="footer-description">
              Passionate about creating innovative web solutions that solve real-world problems.
              Specialized in building modern, scalable applications with the MERN stack.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(social.url)}
                  className="social-btn"
                  title={social.name}
                >
                  <span>{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon"><Mails /></span>
                <a href="mailto:sameer.ansari@example.com">
                  sameeruddin.career@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><Phone /></span>
                <a href="tel:+919876543210">
                  +91 6396818970
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><CircleUserRound /></span>
                <a
                  href="https://sameeruddinansari.github.io/BookFinder/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BookFinder Project
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Sameer Uddin Ansari. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <span>Made with ❤️ using React & Vite</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}