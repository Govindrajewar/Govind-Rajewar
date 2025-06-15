import React from "react";
import "../style/Skills.css";

// React Icons Import
import {
  FaJs,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaBitbucket,
  FaJira,
  FaSlack,
  FaDatabase,
  FaAngular,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiKubernetes,
  SiNginx,
  SiConfluence,
  SiTailwindcss,
  SiPostman,
  SiPrometheus,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdCloud } from "react-icons/md";

function Skills() {
  const languages = [
    { name: "JavaScript", icon: <FaJs color="#F0DB4F" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Java", icon: <FaJava color="#007396" /> },
    { name: "Python", icon: <FaPython color="#3776AB" /> },
  ];

  const frontend = [
    { name: "React.js", icon: <FaReact color="#61DBFB" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "Angular", icon: <FaAngular color="#DD0031" /> },
    // { name: "Material-UI", icon: <SiMaterialui color="#0081CB" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
  ];

  const backend = [
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress color="#000000" /> },
    { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
    { name: "Django", icon: <SiDjango color="#092E20" /> },
    { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
  ];

  const databases = [
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
    { name: "SQL", icon: <FaDatabase color="#336791" /> },
  ];

  const devops = [
    { name: "AWS EC2", icon: <FaAws color="#FF9900" /> },
    { name: "CI/CD Pipelines", icon: <MdCloud color="#00C853" /> },
    { name: "Docker", icon: <FaDocker color="#0db7ed" /> },
    { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" /> },
    { name: "Nginx", icon: <SiNginx color="#009639" /> },
  ];

  const versionControl = [
    { name: "Git", icon: <FaGit color="#F05032" /> },
    { name: "Bitbucket", icon: <FaBitbucket color="#205081" /> },
    { name: "GitHub", icon: <FaGithub color="#000000" /> },
    { name: "Jira", icon: <FaJira color="#0052CC" /> },
    { name: "Confluence", icon: <SiConfluence color="#172B4D" /> },
  ];

  const tools = [
    { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
    { name: "API Development", icon: <TbApi color="#0081CB" /> },
    { name: "Prometheus", icon: <SiPrometheus color="#E6522C" /> },
    { name: "BeeKeeper Studio", icon: <FaDatabase color="#336791" /> },
    // { name: "VS Code", icon: <SiVisualstudiocode color="#007ACC" /> },
    { name: "Slack", icon: <FaSlack color="#4A154B" /> },
  ];

  return (
    <div className="skills-container">
      <div className="skills-section">
        <h3>Programming Languages</h3>
        <div className="skills-list">
          {languages.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Frontend Frameworks</h3>
        <div className="skills-list">
          {frontend.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Backend Frameworks</h3>
        <div className="skills-list">
          {backend.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Databases</h3>
        <div className="skills-list">
          {databases.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>DevOps & Cloud</h3>
        <div className="skills-list">
          {devops.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Version Control & PM Tools</h3>
        <div className="skills-list">
          {versionControl.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-section">
        <h3>Other Tools & Skills</h3>
        <div className="skills-list">
          {tools.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">{skill.icon}</span> {skill.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
