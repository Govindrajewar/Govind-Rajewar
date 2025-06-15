import React from "react";
import "../style/Projects.css";
import formbotImg from "../assets/formBot.png";
import webstoryImg from "../assets/webstory.png";
import quizzieImg from "../assets/quizzie.png";
import { FaGithub, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "FormBot Builder",
    description:
      "A web app that allows users to create, manage, and share forms seamlessly. Form creators can build, edit, organize, and view responses; while respondents access forms via public links.",
    img: formbotImg,
    github: "https://github.com/Govindrajewar/formbot",
    live: "https://formbot-omega.vercel.app/",
  },
  {
    title: "Web Story Platform",
    description:
      "A Platform to view, like, share, and download stories across multiple categories like food, travel, education. Features mobile-responsiveness, user authentication, backend filtering, and bookmarking.",
    img: webstoryImg,
    github: "https://github.com/Govindrajewar/webstoryplatform",
    live: "https://web-story-platform-sigma.vercel.app/",
  },
  {
    title: "Quiz Builder - Quizzie",
    description:
      "A quiz builder that allows creation of Q&A and Poll quizzes. Logged-in users can create quizzes, while anonymous users can attempt them. Analytics show impressions and trending quizzes.",
    img: quizzieImg,
    github: "https://github.com/Govindrajewar/Quizzie",
    live: "https://quizzie-blush.vercel.app/",
  },
];

function Projects() {
  return (
    <div className="projects-container">
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
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe />
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
