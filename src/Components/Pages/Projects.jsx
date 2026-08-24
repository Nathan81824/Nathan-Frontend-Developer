import ProjectsHero from "../Projects/Hero";
import ProjectCard from "../Projects/ProjectCard";

import healthLogistics from "../../assets/projects/health-logistics.png";
import todoApp from "../../assets/projects/todo-app.png";
import calculator from "../../assets/projects/calculator.png";

function Projects() {
  return (
    <main>

      <ProjectsHero />

      <section className="projects-section">
        <div className="projects-container">

          <div className="projects-headingnpm run dev">
            <p>My Work</p>

            <h2>Things I've Built</h2>
          </div>

          <div className="projects-grid">

            <ProjectCard
              number="01"
              title="Health Logistics"
              description="A healthcare logistics website built to showcase medical transportation, cold-chain logistics, inventory management, and healthcare services."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript"
              ]}
              liveLink="https://health-care-logistics.vercel.app/"
              image={healthLogistics}
            />

            <ProjectCard
              number="02"
              title="To-Do App"
              description="A task management application for organizing daily tasks and keeping track of activities."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript"
              ]}
              liveLink="https://nathan81824.github.io/TO_DO_APP/"
              image={todoApp}
            />

            <ProjectCard
              number="03"
              title="Calculator"
              description="A simple calculator application built with JavaScript for performing basic calculations."
              technologies={[
                "HTML",
                "CSS",
                "JavaScript"
              ]}
              liveLink="https://nathan81824.github.io/Caculator/"
              image={calculator}
            />

          </div>

        </div>
      </section>

    </main>
  );
}
export default Projects;

