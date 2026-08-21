import { useEffect, useState } from "react";
import aboutImage from "../../assets/my-image.png";

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
    <section className="about-hero">
      <div className="about-hero-container">

        {/* LEFT - TEXT */}
        <div className="about-hero-content">

          <p className="about-hero-label">
            About Me
          </p>

          <h1>
            I'm a Frontend Developer
          </h1>

          <p className="about-hero-description">
            I enjoy creating modern, responsive and
            user-friendly websites while continuously
            improving my development skills.
          </p>

        </div>

        {/* RIGHT - IMAGE */}
        <div className="about-hero-image">

          <img
            src={aboutImage}
            alt="About me"
          />

          {/* EXPERIENCE / PROJECT BADGE */}
          <div className="about-stat">
            <strong>{count}+</strong>
            <span>Years of Expirience</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;