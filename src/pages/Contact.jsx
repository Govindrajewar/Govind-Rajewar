import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "50px" }
};

export default Contact;
