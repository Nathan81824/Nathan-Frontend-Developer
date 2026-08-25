import {
  Code2,
  BookOpen,
  Briefcase,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

function AboutJourney() {
  const journey = [
    {
      year: "01",
      icon: BookOpen,
      title: "Started Learning",
      description:
        "Started my journey into web development by learning the fundamentals of HTML, CSS, and JavaScript.",
    },
    {
      year: "02",
      icon: Code2,
      title: "Built My Foundation",
      description:
        "Moved deeper into JavaScript, learning DOM manipulation, events, arrays, functions, and modern development practices.",
    },
    {
      year: "03",
      icon: Briefcase,
      title: "Started Building Projects",
      description:
        "Started turning what I learned into real projects, focusing on useful interfaces, responsive layouts, and better user experiences.",
    },
    {
      year: "04",
      icon: Rocket,
      title: "Moved Into React",
      description:
        "Started building larger applications with React, component-based architecture, React Router, APIs, and reusable components.",
    },
  ];

  return (
    <section className="about-journey" id="journey">

      <div className="about-journey-container">

        {/* =================================
            HEADER
        ================================= */}
        <motion.div
          className="about-journey-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="about-journey-label">
            <span></span>
            MY JOURNEY
          </p>

          <h2 className="about-journey-title">
            From learning
            <span>to building.</span>
          </h2>

          <p className="about-journey-intro">
            Every project and every new technology has been
            another step forward. Here&apos;s a look at how my
            development journey has evolved.
          </p>
        </motion.div>


        {/* =================================
            TIMELINE
        ================================= */}
        <div className="about-journey-timeline">

          <div className="about-journey-line"></div>

          {journey.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`about-journey-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={item.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >

                {/* MARKER */}
                <div className="about-journey-marker">
                  <div className="about-journey-icon">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>


                {/* CARD */}
                <div className="about-journey-card">

                  <span className="about-journey-number">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <span className="about-journey-arrow">
                    <ArrowRight size={16} />
                  </span>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default AboutJourney;

