import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import "../style/Home.css";
import profilePic from "../assets/profile.jpg";

const roles = [
  "Full Stack Developer",
  "Python / Django Engineer",
  "React.js Developer",
  "AWS Cloud Enthusiast",
];

function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 55 : 95;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="hero-container">
      <div className="profile-ring">
        <img src={profilePic} alt="Govind Rajewar" className="profile-pic" />
      </div>

      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-title">Govind Rajewar</h1>

      <h2 className="hero-subtitle">
        <span className="highlight">{text}</span>
        <span className="cursor">|</span>
      </h2>

      <p className="hero-stack">
        Python · Django · FastAPI · React.js · AWS · Docker
      </p>

      <p className="hero-description">
        Full Stack Developer with 3.6+ years building scalable, high-performance
        web applications and APIs serving 50K+ users in production.
      </p>

      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-number">3.6+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">50K+</span>
          <span className="stat-label">Users Served</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">2</span>
          <span className="stat-label">Companies</span>
        </div>
      </div>

      <div className="cta-buttons">
        <Link to="/contact">
          <button className="btn contact-btn">
            <MdEmail /> Contact Me
          </button>
        </Link>
        <a href={`${process.env.PUBLIC_URL}/resume.pdf`} download>
          <button className="btn resume-btn">
            <FaDownload /> Download Resume
          </button>
        </a>
        <Link to="/projects">
          <button className="btn projects-btn">
            View Projects <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
