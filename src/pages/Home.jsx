import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import profilePic from "../assets/profile.jpg"; // Make sure to place your passport photo in 'src/assets/' folder

function Home() {
  const fullText = "Govind Rajewar";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && index <= fullText.length) {
        setText(fullText.substring(0, index));
        setIndex(index + 1);
      } else if (isDeleting && index > 1) {
        setText(fullText.substring(0, index));
        setIndex(index - 1);
      }

      if (index === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (index === 1) {
        setIsDeleting(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <div className="hero-container">
      {/* Profile Picture */}
      <img src={profilePic} alt="Govind Rajewar" className="profile-pic" />

      {/* Hero Section */}
      <h1 className="hero-title">
        Hi, I'm{" "}
        <span className="highlight">
          {text}
          <span className="cursor">|</span>
        </span>
      </h1>
      <h2 className="hero-subtitle">
        Full Stack Developer | React | Node.js | Python
      </h2>
      <p className="hero-description">
        I build scalable and high-performance web applications using modern
        technologies like React, Node.js, and AI-driven solutions.
      </p>

      {/* Call to Action Buttons */}
      <div className="cta-buttons">
        <Link to="/contact">
          <button className="btn contact-btn">📧 Contact Me</button>
        </Link>
        <a href="/resume.pdf" download>
          <button className="btn resume-btn">📂 Download Resume</button>
        </a>
        <Link to="/projects">
          <button className="btn projects-btn">📌 View Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
