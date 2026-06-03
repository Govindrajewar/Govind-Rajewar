import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCode, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "../style/Header.css";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <FaCode className="logo-icon" />
          <strong>Govind Rajewar</strong>
        </Link>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="https://github.com/Govindrajewar"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/govind-rajewar"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download
            className="resume-btn-header"
          >
            <FaDownload /> Resume
          </a>
        </div>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
