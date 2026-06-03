import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© 2026 Govind Rajewar · Built with React</p>
        <div className="footer-links">
          <a href="https://github.com/Govindrajewar" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/govind-rajewar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="mailto:abhirajewar87@gmail.com">
            <MdEmail /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
