import { useEffect, useState } from "react";

import {
  Atom,
  Braces,
  FileCode2,
  Palette,
  GitBranch,
  Smartphone,
} from "lucide-react";

function Skills() {
  const skills = [
    {
      icon: Atom,
      name: "React",
      level: "Advanced",
      percentage: 85,
    },
    {
      icon: Braces,
      name: "JavaScript",
      level: "Advanced",
      percentage: 80,
    },
    {
      icon: FileCode2,
      name: "HTML",
      level: "Advanced",
      percentage: 90,
    },
    {
      icon: Palette,
      name: "CSS",
      level: "Advanced",
      percentage: 88,
    },
    {
      icon: GitBranch,
      name: "Git & GitHub",
      level: "Intermediate",
      percentage: 75,
    },
    {
      icon: Smartphone,
      name: "Responsive Design",
      level: "Advanced",
      percentage: 85,
    },
  ];

  const [animatedPercentages, setAnimatedPercentages] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentages(
        skills.map((skill) => skill.percentage)
      );
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="skills-page">

      {/* =================================
          SKILLS HERO
      ================================= */}

      <section className="skills-hero">

        <div className="skills-hero-container">

          <div className="skills-hero-content">

            <p className="skills-hero-label">
              <span className="skills-label-dot"></span>
              My Skills
            </p>

            <h1>
              Tools I Use to
              <span>Build for the Web.</span>
            </h1>

            <p className="skills-hero-description">
              These are some of the technologies and tools
              I've been learning and using to build modern,
              responsive and interactive projects.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          SKILLS SECTION
      ================================= */}

      <section className="skills-section">

        <div className="skills-container">

          {/* SECTION HEADER */}

          <div className="skills-section-header">

            <p>
              My Technologies
            </p>

            <h2>
              What I <span>work with.</span>
            </h2>

          </div>


          {/* SKILLS GRID */}

          <div className="skills-grid">

            {skills.map((skill, index) => {

              const Icon = skill.icon;

              return (
                <div
                  className="skill-card"
                  key={skill.name}
                >

                  {/* TOP */}

                  <div className="skill-card-top">

                    <div className="skill-icon">
                      <Icon
                        size={25}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="skill-level">
                      {skill.level}
                    </span>

                  </div>


                  {/* INFORMATION */}

                  <div className="skill-info">

                    <h2>
                      {skill.name}
                    </h2>

                    <span>
                      {animatedPercentages[index]}%
                    </span>

                  </div>


                  {/* PROGRESS BAR */}

                  <div className="skill-bar">

                    <div
                      className="skill-progress"
                      style={{
                        width:
                          `${animatedPercentages[index]}%`,
                      }}
                    />

                  </div>


                  {/* SKILL FOOTER */}

                  <div className="skill-footer">

                    <span>
                      Proficiency
                    </span>

                    <span>
                      {skill.percentage >= 85
                        ? "Strong"
                        : "Growing"}
                    </span>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>

    </main>
  );
}

export default Skills;