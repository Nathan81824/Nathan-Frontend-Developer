import {
  Atom,
  Braces,
  Code2,
  Palette,
  GitBranch,
  Smartphone,
} from "lucide-react";

function SkillsHero() {
  const technologies = [
    {
      name: "React",
      icon: Atom,
      description: "Building interactive interfaces",
    },
    {
      name: "JavaScript",
      icon: Braces,
      description: "Creating dynamic experiences",
    },
    {
      name: "HTML",
      icon: Code2,
      description: "Writing semantic structure",
    },
    {
      name: "CSS",
      icon: Palette,
      description: "Designing responsive layouts",
    },
    {
      name: "Git",
      icon: GitBranch,
      description: "Managing projects and code",
    },
    {
      name: "Responsive Design",
      icon: Smartphone,
      description: "Building for every screen",
    },
  ];

  return (
    <section className="skills-hero">

      <div className="skills-hero-container">

        {/* =================================
            HERO CONTENT
        ================================= */}

        <div className="skills-hero-content">

          {/* LABEL */}

          <p className="skills-hero-label">
            <span className="skills-label-dot"></span>
            My Skills
          </p>


          {/* TITLE */}

          <h1>
            Skills &amp;
            <span>Technologies.</span>
          </h1>


          {/* DESCRIPTION */}

          <p className="skills-hero-description">
            The technologies and tools I use to transform
            ideas into modern, responsive and interactive
            web experiences.
          </p>


          {/* =================================
              TECHNOLOGY LIST
          ================================= */}

          <div className="skills-tech-list">

            {technologies.map((technology) => {

              const Icon = technology.icon;

              return (
                <div
                  className="skills-tech-item"
                  key={technology.name}
                >

                  {/* ICON */}

                  <div className="skills-tech-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                    />
                  </div>


                  {/* TEXT */}

                  <div className="skills-tech-content">

                    <h3>
                      {technology.name}
                    </h3>

                    <p>
                      {technology.description}
                    </p>

                  </div>


                  {/* ARROW */}

                  <span className="skills-tech-arrow">
                    →
                  </span>

                </div>
              );
            })}

          </div>


          {/* =================================
              BOTTOM NOTE
          ================================= */}

          <div className="skills-hero-note">

            <span className="skills-note-dot"></span>

            <p>
              Always learning. Always building.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SkillsHero;