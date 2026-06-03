import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../style/Contact.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "abhirajewar87@gmail.com",
    href: "mailto:abhirajewar87@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "govind-rajewar",
    href: "https://www.linkedin.com/in/govind-rajewar",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "Govindrajewar",
    href: "https://github.com/Govindrajewar",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Nanded · Open to Remote",
    href: null,
  },
];

function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-section-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Have a project in mind or want to work together? I'd love to hear from you.
      </p>

      <div className="contact-layout">
        {/* Left — contact info */}
        <div className="contact-info">
          <h2>Contact Details</h2>
          <p>Feel free to reach out through any of the channels below. I typically respond within 24 hours.</p>
          <div className="info-list">
            {contactInfo.map((item, i) => (
              <div key={i} className="info-item">
                <span className="info-icon">{item.icon}</span>
                <div className="info-text">
                  <span className="info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="info-value link">
                      {item.value}
                    </a>
                  ) : (
                    <span className="info-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-wrapper">
          <form
            className="contact-form"
            action="https://formsubmit.co/abhirajewar87@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from portfolio!" />
            <input
              type="hidden"
              name="_next"
              value="https://govindrajewar.github.io/Govind-Rajewar"
            />

            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Tell me about your project or idea..." rows="6" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <MdEmail /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
