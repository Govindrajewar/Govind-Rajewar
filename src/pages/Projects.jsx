import React from "react";
import "../style/Projects.css";
import formbotImg from "../assets/formBot.png";
import webstoryImg from "../assets/webstory.png";
import quizzieImg from "../assets/quizzie.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "FormBot Builder",
    description:
      "A web app that allows users to create, manage, and share forms seamlessly. Form creators can build, edit, organize, and view responses; while respondents access forms via shareable public links.",
    img: formbotImg,
    github: "https://github.com/Govindrajewar/formbot",
    live: "https://formbot-omega.vercel.app/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Web Story Platform",
    description:
      "A platform to view, like, share, and download stories across categories like food, travel, and education. Features user authentication, mobile-responsiveness, backend filtering, and bookmarking.",
    img: webstoryImg,
    github: "https://github.com/Govindrajewar/webstoryplatform",
    live: "https://web-story-platform-sigma.vercel.app/",
    tags: ["React.js", "Node.js", "MongoDB", "JWT"],
  },
  {
    title: "Quiz Builder — Quizzie",
    description:
      "A quiz builder supporting Q&A and Poll quiz types. Authenticated users can create quizzes; anonymous users can attempt them. Analytics show impressions and highlight trending quizzes.",
    img: quizzieImg,
    github: "https://github.com/Govindrajewar/Quizzie",
    live: "https://quizzie-blush.vercel.app/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-section-title">Featured Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-wrapper">
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <FaGithub /> Source Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn live"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
