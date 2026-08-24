import { useEffect, useState } from "react";

const heroTexts = [
  {
    label: "My Work",
    title: "Ideas Built Into",
    highlight: "Real Projects.",
    description:
      "Explore a collection of websites and applications I've designed and developed while growing my frontend development skills.",
  },
  {
    label: "Frontend Development",
    title: "Building For The",
    highlight: "Modern Web.",
    description:
      "I enjoy turning ideas into responsive, interactive and user-friendly web experiences.",
  },
  {
    label: "My Journey",
    title: "Learning, Building,",
    highlight: "Improving.",
    description:
      "Every project gives me an opportunity to learn something new and become a better developer.",
  },
];

function ProjectsHero() {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((previous) => (previous + 1) % heroTexts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const current = heroTexts[currentText];

  return (
    <section className="projects-hero">
      <div className="projects-hero-container">
        <div
          className="projects-hero-content"
          key={currentText}
        >
          {/* LABEL */}
          <p className="projects-hero-label">
            <span className="projects-label-dot"></span>
            {current.label}
          </p>

          {/* TITLE */}
          <h1>
            {current.title}
            <span>{current.highlight}</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="projects-hero-description">
            {current.description}
          </p>

          {/* ACTION */}
          <div className="projects-hero-actions">
            <a href="#projects" className="projects-hero-button">
              Explore Projects
              <span>→</span>
            </a>
          </div>

          {/* SLIDE INDICATORS */}
          <div className="projects-hero-indicators">
            {heroTexts.map((_, index) => (
              <button
                key={index}
                type="button"
                className={
                  currentText === index
                    ? "projects-indicator active"
                    : "projects-indicator"
                }
                onClick={() => setCurrentText(index)}
                aria-label={`Show project intro ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;