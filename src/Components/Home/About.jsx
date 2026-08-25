import { ArrowUpRight, Code2, Sparkles } from "lucide-react";

function About() {
  return (
    <section className="home-about" id="about">

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div className="home-about-glow home-about-glow-one" />
      <div className="home-about-glow home-about-glow-two" />


      <div className="home-about-container">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <div className="home-about-heading">

          <div className="home-about-label">
            <span />
            About Me
          </div>

          <h2>
            A Developer
            <span>Who Builds.</span>
          </h2>

          <p>
            I enjoy turning ideas into modern digital experiences
            through clean code, creative design, and thoughtful
            interactions.
          </p>

        </div>


        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div className="home-about-content">

          {/* =========================================
              LEFT — INTRO
          ========================================= */}

          <div className="home-about-intro">

            <div className="home-about-icon">
              <Code2 size={26} strokeWidth={1.7} />
            </div>

            <span className="home-about-number">
              01
            </span>

            <h3>
              Turning ideas into
              <span>interactive experiences.</span>
            </h3>

            <p>
              I'm a frontend developer passionate about creating
              websites that are visually engaging, responsive,
              and enjoyable to use.
            </p>

            <p>
              My journey started with HTML and CSS, grew through
              JavaScript, and eventually led me to React. I'm
              constantly learning and improving by building real
              projects.
            </p>

            <a
              href="/about"
              className="home-about-link"
            >
              More About Me

              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </a>

          </div>


          {/* =========================================
              RIGHT — FEATURE CARD
          ========================================= */}

          <div className="home-about-feature">

            <div className="home-about-feature-top">

              <div className="home-about-feature-icon">
                <Sparkles
                  size={22}
                  strokeWidth={1.7}
                />
              </div>

              <span>
                WHAT I FOCUS ON
              </span>

            </div>


            <div className="home-about-feature-content">

              <div className="home-about-feature-item">
                <strong>01</strong>

                <div>
                  <h4>Modern Interfaces</h4>

                  <p>
                    Clean layouts, strong visual hierarchy,
                    and smooth interactions.
                  </p>
                </div>
              </div>


              <div className="home-about-feature-item">
                <strong>02</strong>

                <div>
                  <h4>Reusable Components</h4>

                  <p>
                    Organized React components that make
                    projects easier to maintain.
                  </p>
                </div>
              </div>


              <div className="home-about-feature-item">
                <strong>03</strong>

                <div>
                  <h4>Continuous Growth</h4>

                  <p>
                    Learning new technologies while improving
                    existing development skills.
                  </p>
                </div>
              </div>

            </div>


            <div className="home-about-feature-footer">

              <span>
                FRONTEND DEVELOPER
              </span>

              <span className="home-about-status">
                <i />
                BUILDING
              </span>

            </div>

          </div>

        </div>


        {/* =========================================
            BOTTOM STATS
        ========================================= */}

        <div className="home-about-stats">

          <div className="home-about-stat">
            <strong>React</strong>
            <span>Framework</span>
          </div>

          <div className="home-about-stat">
            <strong>JavaScript</strong>
            <span>Language</span>
          </div>

          <div className="home-about-stat">
            <strong>Frontend</strong>
            <span>Specialization</span>
          </div>

          <div className="home-about-stat">
            <strong>∞</strong>
            <span>Learning</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;

