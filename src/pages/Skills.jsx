import React from "react";

function Skills() {
  return (
    <div style={styles.container}>
      <h2>Skills</h2>
      <div>
        <h3>Languages</h3>
        <p>JavaScript | TypeScript | HTML | CSS | Java</p>
      </div>
      <div>
        <h3>Frameworks & Libraries</h3>
        <p>React | Redux | Node.js | Express.js</p>
      </div>
      <div>
        <h3>Databases</h3>
        <p>MongoDB | SQL</p>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" }
};

export default Skills;
