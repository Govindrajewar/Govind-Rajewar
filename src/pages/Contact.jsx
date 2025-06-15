import "../style/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Feel free to reach out!</p>
        <form
          className="contact-form"
          action="https://formsubmit.co/abhirajewar87@gmail.com"
          method="POST"
        >
          <div className="form-group">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>
          </div>

          {/* Anti-bot hidden field */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://your-portfolio-url.com/thank-you"
          />

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
