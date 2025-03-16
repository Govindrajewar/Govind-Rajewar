import React from "react";
import "../style/Footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Govind Rajewar | All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        |
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          LinkedIn
        </a>{" "}
        |
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
