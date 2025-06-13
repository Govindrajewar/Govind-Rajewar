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
      "FormBot Builder is a web-based application that allows users to create, manage, and share forms seamlessly. The app caters to two types of users: form creators and form respondents. Form creators can sign up, log in, and utilize a comprehensive set of features to build, edit, organize, and view responses to their forms. Form respondents can access and fill out these forms via public links.",
    img: formbotImg,
    github: "#",
    live: "#",
  },
  {
    title: "Web Story Platform",
    description:
      "A WebStoryPlatform that allows users to view, like, share, and download stories. The platform offers a variety of categories like food, travel, and education, with filters for easy browsing. Logged-in users can add, edit, and bookmark stories, while unique like counts ensure an authentic engagement experience. Anonymous users can still filter and share stories. The app features a mobile-responsive design and handles backend filtering to enhance performance.",
    img: webstoryImg,
    github: "#",
    live: "#",
  },
  {
    title: "Quiz Builder - Quizzie",
    description:
      "A quiz builder app that allows users to create, share, and take quizzes. The app supports two types of quizzes: Q&A and Polls. Users need to log in to create and share quizzes, while anonymous users can attempt quizzes without logging in. Analytics track the number of impressions and highlight trending quizzes based on the number of times they are accessed.",
    img: quizzieImg,
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-text">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <img src={project.img} alt={project.title} className="project-img" />
        </div>
      ))}
    </div>
  );
}

export default Projects;
