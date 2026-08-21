import { useState } from "react";
import ContactHero from "../Contact/Hero";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setShowSuccess(true);

    event.target.reset();

    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <main>

      {/* CONTACT HERO */}
      <ContactHero />

      {/* CONTACT SECTION */}
      <section
        className="contact-section"
        id="contact-form"
      >
        <div className="contact-container">

          {/* =========================
              LEFT - CONTACT INFO
          ========================== */}

          <div className="contact-info">

            <p className="contact-label">
              Contact
            </p>

            <h2>
              Let's talk about
              <span>your project.</span>
            </h2>

            <p>
              Have a question, project idea, or opportunity?
              Fill out the form and I'll get back to you.
            </p>

            <div className="contact-details">

              {/* EMAIL */}
              <div className="contact-detail">

                <span>
                  Email
                </span>

                <a href="mailto:your-email@example.com">
                  your-email@example.com
                </a>

              </div>


              {/* LOCATION */}
              <div className="contact-detail">

                <span>
                  Location
                </span>

                <p>
                  Nigeria
                </p>

              </div>

            </div>

          </div>


          {/* =========================
              RIGHT - CONTACT FORM
          ========================== */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />

            </div>


            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />

            </div>


            {/* SUBJECT */}
            <div className="form-group">

              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
              />

            </div>


            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />

            </div>


            {/* SUBMIT */}
            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>
      </section>


      {/* =========================
          SUCCESS POPUP
      ========================== */}

      {showSuccess && (
        <div className="success-overlay">

          <div className="success-popup">

            <div className="success-icon">
              ✓
            </div>

            <h3>
              Message Sent Successfully!
            </h3>

            <p>
              Thanks for reaching out. I'll get back
              to you as soon as possible.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
            >
              Done
            </button>

          </div>

        </div>
      )}

    </main>
  );
}

export default Contact;