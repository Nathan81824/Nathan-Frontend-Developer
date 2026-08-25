import { ArrowUpRight, MessageCircle } from "lucide-react";

function AboutCTA() {
  return (
    <section className="about-cta" id="about-cta">

      <div className="about-cta-container">

        {/* =================================
            LEFT CONTENT
        ================================= */}
        <div className="about-cta-content">

          <p className="about-cta-label">
            <span></span>
            LET&apos;S WORK TOGETHER
          </p>

          <h2 className="about-cta-title">
            Have an idea?
            <span>Let&apos;s build it.</span>
          </h2>

          <p className="about-cta-description">
            Whether you have a project in mind, want to collaborate,
            or simply want to talk about web development, I&apos;m
            always open to connecting.
          </p>

        </div>


        {/* =================================
            RIGHT ACTION
        ================================= */}
        <div className="about-cta-action">

          <div className="about-cta-icon">
            <MessageCircle size={24} />
          </div>

          <div className="about-cta-action-content">

            <span>
              START A CONVERSATION
            </span>

            <a
              href="/contact"
              className="about-cta-button"
            >
              Contact Me

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;
