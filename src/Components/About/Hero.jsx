import { useEffect, useState } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import aboutImage from "../../assets/my-images/my-image.png";

function AboutHero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= 5) {
        clearInterval(timer);
      }
    }, 300);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-hero" id="about">
      <div className="about-hero-container">

        {/* LEFT - CONTENT */}
        <div className="about-hero-content">
          <p className="about-hero-label">
            <span></span>
            About Me
          </p>

          <h1>
            I'm a Frontend
            <span>Developer.</span>
          </h1>

          <p className="about-hero-description">
            I enjoy creating modern, responsive and user-friendly websites.
            Currently leveling up my skills in React, JavaScript, and Tailwind
            while building real projects.
          </p>

          {/* SMALL INFO */}
          <div className="about-hero-meta">
            <div className="about-meta-item">
              <Sparkles size={15} />
              <span>Self-taught Developer</span>
            </div>

            <div className="about-meta-item">
              <span className="about-meta-dot"></span>
              <span>Available for Projects</span>
            </div>
          </div>

          {/* SCROLL / EXPLORE */}
          <div className="about-explore">
            <span>Explore my journey</span>
            <div className="about-explore-icon">
              <ArrowDownRight size={17} />
            </div>
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="about-hero-image">
          {/* BACKGROUND GLOW */}
          <div className="about-image-glow"></div>

          {/* IMAGE FRAME */}
          <div className="about-image-frame">
            <img src={aboutImage} alt="Nathan" />

            {/* IMAGE OVERLAY */}
            <div className="about-image-overlay"></div>

            {/* IMAGE TOP LABEL */}
            <div className="about-image-label">
              <span></span>
              FRONTEND DEVELOPER
            </div>
          </div>

          {/* PROJECTS BADGE */}
          <div className="about-stat">
            <strong>{count}+</strong>
            <span>
              Projects
              <br />
              Built
            </span>
          </div>

          {/* SMALL CORNER DECORATION */}
          <div className="about-image-corner"></div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;