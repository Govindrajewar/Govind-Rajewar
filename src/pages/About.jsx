import React from "react";

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        This is the about page. Here you can add details about your company.
      </p>
      <img src="/assets/about-image.jpg" alt="About" />
      <a href="/assets/about-document.pdf" download>
        Download About PDF
      </a>
    </div>
  );
}

export default About;
