import {
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

function ContactHero() {
  return (
    <section className="contact-hero" id="contact">

      {/* =================================
          CONTACT HERO CONTAINER
      ================================= */}
      <div className="contact-hero-container">


        {/* =================================
            LEFT SIDE
        ================================= */}
        <div className="contact-hero-content">

          <p className="contact-hero-label">
            <span></span>
            CONTACT
          </p>

          <h1 className="contact-hero-title">
            Let&apos;s build
            <span>something great.</span>
          </h1>

          <p className="contact-hero-description">
            Have a project, idea, or opportunity in mind?
            I&apos;d love to hear from you. Let&apos;s turn your
            ideas into something useful, beautiful, and
            meaningful.
          </p>


          {/* =================================
              CONTACT DETAILS
          ================================= */}
          <div className="contact-hero-details">

            <a
              href="mailto:your@email.com"
              className="contact-hero-detail"
            >
              <div className="contact-hero-detail-icon">
                <Mail size={19} />
              </div>

              <div>
                <span>EMAIL</span>
                <strong>your@email.com</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>


            <div className="contact-hero-detail">
              <div className="contact-hero-detail-icon">
                <MapPin size={19} />
              </div>

              <div>
                <span>LOCATION</span>
                <strong>Available Worldwide</strong>
              </div>
            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE — CONTACT CARD
        ================================= */}
        <div className="contact-hero-card">

          <div className="contact-hero-card-header">

            <div className="contact-hero-card-icon">
              <MessageCircle size={22} />
            </div>

            <div>
              <span>GET IN TOUCH</span>

              <h2>
                Send a message
              </h2>
            </div>

          </div>


          {/* =================================
              FORM
          ================================= */}
          <form className="contact-hero-form">

            {/* NAME */}
            <div className="contact-hero-field">

              <label htmlFor="contact-name">
                Name
              </label>

              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
              />

            </div>


            {/* EMAIL */}
            <div className="contact-hero-field">

              <label htmlFor="contact-email">
                Email
              </label>

              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
              />

            </div>


            {/* MESSAGE */}
            <div className="contact-hero-field">

              <label htmlFor="contact-message">
                Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
              ></textarea>

            </div>


            {/* SUBMIT */}
            <button
              type="submit"
              className="contact-hero-submit"
            >
              <span>
                Send Message
              </span>

              <ArrowUpRight size={18} />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;
