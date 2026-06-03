import React from "react";
import "../style/Experience.css";

const experiences = [
  {
    company: "UrbanMatch Tech Pvt Ltd",
    role: "Software Developer",
    duration: "Nov 2023 – Present",
    location: "Remote",
    tags: ["Python", "Django", "DRF", "React.js", "AWS", "Docker", "WebSockets", "Celery", "RabbitMQ", "Redux"],
    responsibilities: [
      "Designed and developed scalable backend systems using Python, Django, and Django REST Framework (DRF), building high-performance RESTful APIs supporting 50K+ users.",
      "Architected microservices-based solutions and deployed containerized applications using Docker and AWS (EC2, ECS, Lambda, RDS, S3), improving scalability and deployment efficiency.",
      "Developed real-time features using WebSockets and integrated third-party services including Razorpay (payments), Firebase, and OneSignal (notifications).",
      "Built asynchronous processing pipelines using Celery and RabbitMQ for background jobs and event-driven workflows.",
      "Optimized database performance using Django ORM, reducing API response time by 40%.",
      "Developed responsive frontend interfaces using React.js, JavaScript, and reusable component-based architecture for user-facing platform modules.",
      "Integrated React frontend applications with backend REST APIs, improving data flow, usability, and overall application performance.",
      "Implemented state management using Redux/Context API and optimized frontend rendering performance for scalable web applications.",
    ],
  },
  {
    company: "G+D MS India Pvt Ltd",
    role: "Junior Software Engineer",
    duration: "Sep 2022 – Nov 2023",
    location: "Pune",
    tags: ["Python", "Django", "DRF", "MySQL", "PostgreSQL", "Firebase", "JWT", "OAuth", "CI/CD"],
    responsibilities: [
      "Developed backend APIs and microservices using Python, Django, and DRF for large-scale mobile and enterprise applications.",
      "Designed and optimized database schemas using MySQL and PostgreSQL, improving performance and data integrity.",
      "Built RESTful APIs for Android and iOS integration, ensuring reliable and scalable communication.",
      "Implemented Firebase-based push notifications and event tracking for real-time user engagement.",
      "Performed debugging, testing, and CI/CD-based deployments, ensuring stable and maintainable releases.",
      "Built and maintained APIs for core modules including onboarding, matchmaking, subscriptions, and account management.",
      "Implemented authentication and authorization using JWT and OAuth with role-based access control (RBAC) across distributed services.",
    ],
  },
];

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="section-title">Work Experience</h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <div className="exp-header">
                <div className="exp-left">
                  <h3 className="company-name">{exp.company}</h3>
                  <span className="role-badge">{exp.role}</span>
                </div>
                <div className="exp-right">
                  <span className="duration-badge">{exp.duration}</span>
                  <span className="location">{exp.location}</span>
                </div>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="tech-tags">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
