import React from "react";
import "../style/Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Delta India Pvt Ltd",
      role: "Software Developer",
      duration: "Nov 2023 – Mar 2025",
      location: "Pune",
      responsibilities: [
        "Designed and developed React.js and Next.js applications with reusable and optimized components.",
        "Developed and maintained RESTful APIs using Node.js, Express.js, and integrated them with front-end applications.",
        "Managed MongoDB, MySQL, and optimized queries for efficient data handling.",
        "Implemented JWT and OAuth authentication for secure user sessions.",
        "Worked on AWS services (EC2, RDS, Lambda) for cloud-based deployments.",
        "Set up Docker and CI/CD pipelines (Jenkins, GitHub Actions) for automated deployments.",
        "Collaborated in an Agile environment with code reviews, sprint planning, and daily stand-ups.",
      ],
    },
    {
      company: "Giesecke+Devrient MS India Pvt Ltd",
      role: "Junior Software Engineer",
      duration: "Sep 2022 – Nov 2023",
      location: "Pune",
      responsibilities: [
        "Developed and optimized Java-based backend applications and REST APIs.",
        "Designed and implemented database schemas using MySQL and PostgreSQL.",
        "Utilized Git, Bitbucket, and Jira for version control and project management.",
        "Worked on Linux environments, ensuring efficient system performance.",
        "Contributed to unit testing and debugging, improving software stability.",
      ],
    },
  ];

  return (
    <div className="experience-container">
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div className="company-line">
                <div className="company-location">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="location">{exp.location}</span>
                </div>
                <span className="duration">{exp.duration}</span>
              </div>
              <div className="meta">
                <span className="role">{exp.role}</span>
              </div>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
