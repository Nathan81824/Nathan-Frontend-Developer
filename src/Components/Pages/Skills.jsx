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

  return (
    <main className="skills-page">

      {/* =========================
          SKILLS HERO
      ========================== */}

      <section className="skills-hero">

        <div className="skills-hero-container">

          <p className="skills-label">
            My Skills
          </p>

          <h1>
            Tools I Use to
            <span>Build for the Web.</span>
          </h1>

          <p>
            These are some of the technologies and tools
            I've been learning and using to build my
            projects.
          </p>

        </div>

      </section>


      {/* =========================
          SKILLS
      ========================== */}

      <section className="skills-section">

        <div className="skills-container">

          <div className="skills-grid">

            {skills.map((skill) => {

              const Icon = skill.icon;

              return (
                <div
                  className="skill-card"
                  key={skill.name}
                >

                  <div className="skill-card-top">

                    <div className="skill-icon">
                      <Icon size={26} />
                    </div>

                    <span className="skill-level">
                      {skill.level}
                    </span>

                  </div>


                  <div className="skill-info">

                    <h2>
                      {skill.name}
                    </h2>

                    <span>
                      {skill.percentage}%
                    </span>

                  </div>


                  <div className="skill-bar">

                    <div
                      className="skill-progress"
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    />

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