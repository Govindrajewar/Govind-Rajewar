import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css"; // Import CSS file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>🔓</span> <strong>Govind Rajewar</strong>
      </div>
      <nav className="nav-links">
        <Link to="/">🏠 Home</Link>
        <Link to="/experience">📄 Experience</Link>
        <Link to="/skills">📋 Skills</Link>
        <Link to="/projects">💻 Projects</Link>
        <Link to="/contact">📞 Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
