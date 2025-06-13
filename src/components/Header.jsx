import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span>🔓</span> <strong>Govind Rajewar</strong>
        </div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>🏠 Home</Link>
          <Link to="/experience" onClick={() => setIsOpen(false)}>📄 Experience</Link>
          <Link to="/skills" onClick={() => setIsOpen(false)}>📋 Skills</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>💻 Projects</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>📞 Contact</Link>
        </div>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
