
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  siGithub,
} from "simple-icons";


function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thanks for your message! I'll get back to you soon.");
  };


  return (
    <main className="contact-page">

      {/* =================================
          CONTACT HERO
      ================================= */}

      <section className="contact-hero">

        <div className="contact-hero-container">

          <div className="contact-hero-content">

            <p className="contact-hero-label">
              Get In Touch
            </p>

            <h1>
              Let's Build
              <span>Something Great.</span>
            </h1>

            <p className="contact-hero-description">
              Have an idea, a project, or just want to connect?
              I'd love to hear from you. Send me a message and
              let's start a conversation.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          CONTACT SECTION
      ================================= */}

      <section className="contact-section">

        <div className="contact-container">


          {/* =================================
              CONTACT INFORMATION
          ================================= */}

          <div className="contact-info">

            <p className="contact-small-label">
              CONTACT ME
            </p>

            <h2>
              Let's Talk.
            </h2>

            <p className="contact-info-description">
              Whether you have a project in mind, a question,
              or simply want to say hello, feel free to reach out.
            </p>


            {/* =================================
                CONTACT DETAILS
            ================================= */}

            <div className="contact-details">


              {/* EMAIL */}

              <a
                href="mailto:nathanmoses.u@gmail.com"
                className="contact-detail"
              >

                <div className="contact-detail-icon">
                  <Mail size={21} />
                </div>

                <div className="contact-detail-content">

                  <span className="contact-detail-label">
                    Email
                  </span>

                  <span className="contact-detail-value">
                    nathanmoses.u@gmail.com
                  </span>

                </div>

              </a>


              {/* PHONE */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <Phone size={21} />
                </div>

                <div className="contact-detail-content">

                  <span className="contact-detail-label">
                    Phone
                  </span>

                  <span className="contact-detail-value">
                    Available on request
                  </span>

                </div>

              </div>


              {/* LOCATION */}

              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <MapPin size={21} />
                </div>

                <div className="contact-detail-content">

                  <span className="contact-detail-label">
                    Location
                  </span>

                  <span className="contact-detail-value">
                    Nigeria
                  </span>

                </div>

              </div>

            </div>


            {/* =================================
                SOCIAL LINKS
            ================================= */}

            <div className="contact-socials">


              {/* GITHUB */}

              <a
                href="https://github.com/Nathan81824/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >

                <span className="contact-social-icon">

                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="GitHub"
                  >
                    <path d={siGithub.path} />
                  </svg>

                </span>

                <span>
                  GitHub
                </span>

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/nathan-moses-b13b143bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >

                <span className="contact-social-icon linkedin-icon">
                  in
                </span>

                <span>
                  LinkedIn
                </span>

              </a>

            </div>

          </div>


          {/* =================================
              CONTACT FORM
          ================================= */}

          <div className="contact-form">

            <div className="contact-form-header">

              <p className="contact-small-label">
                SEND A MESSAGE
              </p>

              <h2>
                Start a Conversation
              </h2>

              <p>
                Fill out the form below and I'll get back to you
                as soon as possible.
              </p>

            </div>


            <form onSubmit={handleSubmit}>


              {/* NAME + EMAIL */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />

                </div>

              </div>


              {/* SUBJECT */}

              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to talk about?"
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
                  rows="7"
                  placeholder="Tell me about your project..."
                  required
                />

              </div>


              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="contact-submit"
              >

                <span>
                  Send Message
                </span>

                <Send size={18} />

              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}


export default Contact;

