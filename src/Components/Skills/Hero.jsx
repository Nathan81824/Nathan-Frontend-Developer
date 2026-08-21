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
    },
    {
      name: "JavaScript",
      icon: Braces,
    },
    {
      name: "HTML",
      icon: Code2,
    },
    {
      name: "CSS",
      icon: Palette,
    },
    {
      name: "Git",
      icon: GitBranch,
    },
    {
      name: "Responsive",
      icon: Smartphone,
    },
  ];

  return (
    <section className="skills-hero">

      <div className="skills-hero-container">

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
            The technologies and tools I use to turn ideas
            into modern, responsive and interactive web
            experiences.
          </p>


          {/* TECHNOLOGY LIST */}

          <div className="skills-tech-list">

            {technologies.map((technology) => {

              const Icon = technology.icon;

              return (
                <div
                  className="skills-tech-item"
                  key={technology.name}
                >

                  <Icon size={18} />

                  <span>
                    {technology.name}
                  </span>

                </div>
              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default SkillsHero;