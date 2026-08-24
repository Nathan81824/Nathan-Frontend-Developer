import {
  Rocket,
  Code2,
  Braces,
  GitBranch,
  Sparkles,
} from "lucide-react";


function Journey() {
  const journey = [
    {
      year: "2024",
      icon: Rocket,
      title: "Started Web Development",
      description:
        "Started my journey into web development and discovered how websites are built.",
    },
    {
      year: "2025",
      icon: Code2,
      title: "HTML & CSS",
      description:
        "Learned how to build structured, responsive and visually appealing websites.",
    },
    {
      year: "2025",
      icon: Braces,
      title: "JavaScript",
      description:
        "Started creating interactive websites and learning programming concepts with JavaScript.",
    },
    {
      year: "2026",
      icon: GitBranch,
      title: "React & Git",
      description:
        "Moved into React development and started using Git and GitHub to manage projects.",
    },
    {
      year: "NOW",
      icon: Sparkles,
      title: "Building Real Projects",
      description:
        "Continuing to improve my skills by building real-world projects and learning new technologies.",
    },
  ];

  return (
    <section className="journey-section" id="journey">

      <div className="journey-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="journey-heading">

          <p className="journey-label">
            My Journey
          </p>

          <h2>
            From Learning
            <span>To Building.</span>
          </h2>

          <p className="journey-intro">
            A look at the steps I've taken while learning
            and growing as a frontend developer.
          </p>

        </div>


        {/* =================================
            TIMELINE
        ================================= */}

        <div className="journey-timeline">

          {journey.map((item, index) => {

            const Icon = item.icon;

            return (
              <article
                className="journey-item"
                key={index}
              >

                {/* TIMELINE LINE */}

                {index !== journey.length - 1 && (
                  <div className="journey-line"></div>
                )}


                {/* ICON */}

                <div className="journey-icon">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>


                {/* CONTENT */}

                <div className="journey-content">

                  <span className="journey-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Journey;
