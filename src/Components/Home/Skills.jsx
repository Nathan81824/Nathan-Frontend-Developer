
import {
  Code2,
  Smartphone,
  Palette,
  GitBranch,
  Monitor,
  Database,
} from "lucide-react";


function Skills() {
  const skills = [
    {
      icon: Code2,
      title: "React",
      description:
        "Building modern and interactive user interfaces with React.",
    },
    {
      icon: Code2,
      title: "JavaScript",
      description:
        "Creating dynamic functionality and interactive web experiences.",
    },
    {
      icon: Monitor,
      title: "HTML",
      description:
        "Writing clean, semantic and well-structured web pages.",
    },
    {
      icon: Palette,
      title: "CSS",
      description:
        "Creating responsive, modern and visually polished interfaces.",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Making websites work smoothly across phones, tablets and desktops.",
    },
    {
      icon: GitBranch,
      title: "Git & GitHub",
      description:
        "Managing projects, tracking changes and publishing code.",
    },
    {
      icon: Database,
      title: "APIs",
      description:
        "Connecting applications to external data and services.",
    },
    {
      icon: Code2,
      title: "React Router",
      description:
        "Building multi-page experiences and navigation in React applications.",
    },
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="skills-container">

        {/* SECTION HEADER */}

        <div className="skills-heading">

          <p className="skills-label">
            My Skills
          </p>

          <h2>
            Technologies I
            <span>Work With.</span>
          </h2>

          <p className="skills-intro">
            Technologies and tools I use to build modern,
            responsive and interactive web experiences.
          </p>

        </div>


        {/* SKILLS GRID */}

        <div className="skills-grid">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (
              <article
                className="skill-card"
                key={index}
              >

                <div className="skill-icon">
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="skill-content">

                  <h3>
                    {skill.title}
                  </h3>

                  <p>
                    {skill.description}
                  </p>

                </div>

                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Skills;
