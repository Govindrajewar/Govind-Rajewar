import React from "react";
import "../style/Skills.css";

import {
  FaJs, FaPython, FaReact, FaNodeJs, FaAws, FaDocker,
  FaGit, FaGithub, FaBitbucket, FaJira,
  FaKey, FaLock, FaUsers, FaCodeBranch, FaLeaf, FaHtml5, FaPlug,
} from "react-icons/fa";
import {
  SiTypescript, SiRedux, SiMongodb, SiPostgresql, SiExpress,
  SiFastapi, SiDjango, SiKubernetes, SiConfluence, SiPostman,
  SiRedis, SiMysql, SiRabbitmq, SiFlask, SiGithubactions,
} from "react-icons/si";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Python",       icon: <FaPython    color="#3776AB" /> },
      { name: "JavaScript",   icon: <FaJs        color="#F0DB4F" /> },
      { name: "TypeScript",   icon: <SiTypescript color="#3178C6" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js",     icon: <FaReact     color="#61DBFB" /> },
      { name: "Redux",        icon: <SiRedux     color="#764ABC" /> },
      { name: "HTML5 / CSS3", icon: <FaHtml5     color="#E34F26" /> },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Django / DRF", icon: <SiDjango    color="#44B78B" /> },
      { name: "FastAPI",      icon: <SiFastapi   color="#009688" /> },
      { name: "Flask",        icon: <SiFlask     color="#AAAAAA" /> },
      { name: "Node.js",      icon: <FaNodeJs    color="#68A063" /> },
      { name: "Express.js",   icon: <SiExpress   color="#CCCCCC" /> },
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL",   icon: <SiPostgresql color="#336791" /> },
      { name: "MySQL",        icon: <SiMysql      color="#4479A1" /> },
      { name: "MongoDB",      icon: <SiMongodb    color="#47A248" /> },
      { name: "Redis",        icon: <SiRedis      color="#DC382D" /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2/ECS/Lambda)", icon: <FaAws          color="#FF9900" /> },
      { name: "Docker",               icon: <FaDocker       color="#0db7ed" /> },
      { name: "Kubernetes",           icon: <SiKubernetes   color="#326CE5" /> },
      { name: "GitHub Actions",       icon: <SiGithubactions color="#2088FF" /> },
    ],
  },
  {
    title: "Messaging & Real-Time",
    skills: [
      { name: "WebSockets", icon: <FaPlug        color="#61DBFB" /> },
      { name: "Celery",     icon: <FaLeaf        color="#37B24D" /> },
      { name: "RabbitMQ",   icon: <SiRabbitmq    color="#FF6600" /> },
      { name: "Webhooks",   icon: <FaCodeBranch  color="#9CA3AF" /> },
    ],
  },
  {
    title: "Auth & Security",
    skills: [
      { name: "JWT",     icon: <FaKey   color="#F59E0B" /> },
      { name: "OAuth",   icon: <FaLock  color="#3B82F6" /> },
      { name: "RBAC",    icon: <FaUsers color="#14B8A6" /> },
    ],
  },
  {
    title: "Tools & Version Control",
    skills: [
      { name: "Git",        icon: <FaGit       color="#F05032" /> },
      { name: "GitHub",     icon: <FaGithub    color="#CCCCCC" /> },
      { name: "Bitbucket",  icon: <FaBitbucket color="#2684FF" /> },
      { name: "Jira",       icon: <FaJira      color="#0052CC" /> },
      { name: "Confluence", icon: <SiConfluence color="#0052CC" /> },
      { name: "Postman",    icon: <SiPostman   color="#FF6C37" /> },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-section-title">Technical Skills</h1>
      <div className="skills-grid">
        {categories.map((cat, index) => (
          <div key={index} className="skills-section">
            <h3>{cat.title}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
