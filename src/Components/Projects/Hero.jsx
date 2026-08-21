import { useEffect, useState } from "react";

function ProjectsHero() {
  const [currentText, setCurrentText] = useState(0);

  const heroTexts = [
    {
      label: "My Work",
      title: "Ideas Built Into",
      highlight: "Real Projects.",
      description:
        "Explore a collection of websites and applications I've designed and developed while growing my frontend development skills."
    },
    {
      label: "Frontend Development",
      title: "Building For The",
      highlight: "Modern Web.",
      description:
        "I enjoy turning ideas into responsive, interactive and user-friendly web experiences."
    },
    {
      label: "My Journey",
      title: "Learning, Building,",
      highlight: "Improving.",
      description:
        "Every project gives me an opportunity to learn something new and become a better developer."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((previous) => {
        return (previous + 1) % heroTexts.length;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [heroTexts.length]);

  const current = heroTexts[currentText];

  return (
    <section className="projects-hero">
      <div className="projects-hero-container">

        <div className="projects-hero-content">

          <p className="projects-hero-label">
            {current.label}
          </p>

          <h1>
            {current.title}
            <span>{current.highlight}</span>
          </h1>

          <p className="projects-hero-description">
            {current.description}
          </p>

          <div className="projects-hero-actions">
            <a href="#projects">
              Explore Projects →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProjectsHero;