import React from "react";

function Experience() {
  return (
    <div style={styles.container}>
      <h2>Experience</h2>
      <div>
        <h3>Delta India Pvt Ltd</h3>
        <p>Software Developer | Nov 2023 - Present</p>
      </div>
      <div>
        <h3>Giesecke+Devrient MS India Pvt Ltd</h3>
        <p>Junior Software Engineer | Sep 2022 - Nov 2023</p>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" }
};

export default Experience;
