import { useState, useRef } from 'react';
import './Contact.css';
import { Twitter, Linkedin, Instagram, Github, Mails, Phone, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs
      .sendForm(
        "service_1c4xwkm",
        "template_2tzy20r",
        formRef.current,
        "r3Tr_SrNQYKuHfJJU"
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setSubmitStatus('success');
          formRef.current.reset();
        },
        (error) => {
          console.error("❌ Email error:", error.text);
          setSubmitStatus(`error:${error.text}`);
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const contactInfo = [
    {
      icon: <Mails />,
      title: 'Email',
      value: 'sameeruddin.career@gmail.com',
      link: 'mailto:sameeruddin.career@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 6396818970',
      link: 'tel:+919876543210'
    },
    {
      icon: <Globe />,
      title: 'Website',
      value: 'BookFinder Project',
      link: 'https://sameeruddinansari.github.io/BookFinder/'
    },
    {
      icon: <Linkedin />,
      title: 'LinkedIn',
      value: 'Sameeruddin Ansari',
      link: '#'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects,
              or just having a chat about technology and development.
            </p>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-item">
                  <span className="contact-icon">{info.icon}</span>
                  <div className="contact-details">
                    <h4>{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <span><Github /></span> GitHub
                </a>
                <a href="#" className="social-link">
                  <span><Instagram /></span> Instagram
                </a>
                <a href="#" className="social-link">
                  <span><Twitter /></span> Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <h3>Send Me a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required placeholder="Your full name" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required placeholder="Project inquiry, collaboration, etc." />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" required rows="6" placeholder="Tell me about your project, ideas, or just say hello!"></textarea>
              </div>

              <button type="submit" className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus.startsWith('error') && (
                <div className="form-message error">
                  ❌ {submitStatus.replace('error:', '')}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
