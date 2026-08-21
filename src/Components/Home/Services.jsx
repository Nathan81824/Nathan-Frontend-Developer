import {
  Code2,
  Smartphone,
  Palette,
  Zap,
} from "lucide-react";


function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "I build modern websites and web applications using React, JavaScript, HTML and CSS.",
    },

    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "I create websites that work smoothly across phones, tablets and desktop devices.",
    },

    {
      icon: Palette,
      title: "UI Development",
      description:
        "I turn ideas into clean, intuitive and user-friendly web interfaces.",
    },

    {
      icon: Zap,
      title: "Performance",
      description:
        "I focus on creating fast, smooth and enjoyable experiences for website visitors.",
    },
  ];

  return (
    <section className="services">

      <div className="services-container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="services-header">

          <p className="services-label">
            What I Do
          </p>

          <h2>
            Building for the
            <span>modern web.</span>
          </h2>

          <p className="services-intro">
            I combine clean code, thoughtful design and
            modern technologies to create websites that
            are both functional and enjoyable to use.
          </p>

        </div>


        {/* =========================
            SERVICE CARDS
        ========================== */}

        <div className="services-grid">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <div
                className="service-card"
                key={service.title}
              >

                {/* ICON */}

                <div className="service-icon">
                  <Icon size={26} strokeWidth={1.8} />
                </div>


                {/* NUMBER */}

                <span className="service-number">
                  0{index + 1}
                </span>


                {/* TITLE */}

                <h3>
                  {service.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {service.description}
                </p>


                {/* ARROW */}

                <div className="service-arrow">
                  →
                </div>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Services;