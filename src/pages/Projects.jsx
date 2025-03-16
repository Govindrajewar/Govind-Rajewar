import React from "react";

function Projects() {
  return (
    <div style={styles.container}>
      <h2>Projects</h2>
      <div>
        <h3>FormBot Builder</h3>
        <p>A web-based tool for creating and managing forms.</p>
      </div>
      <div>
        <h3>Web Story Platform</h3>
        <p>A platform to share, like, and bookmark stories.</p>
      </div>
      <div>
        <h3>Quiz Builder</h3>
        <p>An app for creating and sharing quizzes.</p>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" }
};

export default Projects;
