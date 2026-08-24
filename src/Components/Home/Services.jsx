import { useEffect, useRef, useState } from "react";

import {
Code2,
Smartphone,
Palette,
Zap,
ArrowUpRight,
} from "lucide-react";

function Services() {
const [headerVisible, setHeaderVisible] = useState(false);
const [topCardsVisible, setTopCardsVisible] = useState(false);
const [bottomCardsVisible, setBottomCardsVisible] = useState(false);
const [footerVisible, setFooterVisible] = useState(false);

const servicesRef = useRef(null);
const topCardsRef = useRef(null);
const bottomCardsRef = useRef(null);
const footerRef = useRef(null);

const services = [
{
icon: Code2,
number: "01",
title: "Web Development",
description:
"I build modern websites and interactive web applications using React, JavaScript, HTML and CSS.",
},


{
  icon: Smartphone,
  number: "02",
  title: "Responsive Design",
  description:
    "I create responsive interfaces that provide a smooth experience across phones, tablets and desktop devices.",
},

{
  icon: Palette,
  number: "03",
  title: "UI Development",
  description:
    "I transform ideas and designs into clean, accessible and user-friendly interfaces.",
},

{
  icon: Zap,
  number: "04",
  title: "Performance",
  description:
    "I focus on writing efficient code and creating fast, smooth and enjoyable experiences for users.",
},


];

// ==========================================
// HEADER OBSERVER
// ==========================================

useEffect(() => {
const element = servicesRef.current;

if (!element) return;

const observer = new IntersectionObserver(
  ([entry]) => {
    setHeaderVisible(entry.isIntersecting);
  },
  {
    threshold: 0.15,
  }
);

observer.observe(element);

return () => observer.disconnect();


}, []);

// ==========================================
// FIRST TWO CARDS OBSERVER
// ==========================================

useEffect(() => {
const element = topCardsRef.current;


if (!element) return;

const observer = new IntersectionObserver(
  ([entry]) => {
    setTopCardsVisible(entry.isIntersecting);
  },
  {
    threshold: 0.25,
  }
);

observer.observe(element);

return () => observer.disconnect();


}, []);

// ==========================================
// LAST TWO CARDS OBSERVER
// ==========================================

useEffect(() => {
const element = bottomCardsRef.current;

if (!element) return;

const observer = new IntersectionObserver(
  ([entry]) => {
    setBottomCardsVisible(entry.isIntersecting);
  },
  {
    threshold: 0.25,
  }
);

observer.observe(element);

return () => observer.disconnect();


}, []);

// ==========================================
// FOOTER OBSERVER
// ==========================================

useEffect(() => {
const element = footerRef.current;


if (!element) return;

const observer = new IntersectionObserver(
  ([entry]) => {
    setFooterVisible(entry.isIntersecting);
  },
  {
    threshold: 0.25,
  }
);

observer.observe(element);

return () => observer.disconnect();


}, []);

// ==========================================
// CARD COMPONENT
// ==========================================

const renderCard = (service) => {
const Icon = service.icon;


return (
  <article
    className="service-card service-card-animation"
    key={service.title}
  >

    {/* TOP */}

    <div className="service-card-top">

      <div className="service-icon">
        <Icon
          size={26}
          strokeWidth={1.8}
        />
      </div>

      <span className="service-number">
        {service.number}
      </span>

    </div>


    {/* CONTENT */}

    <div className="service-content">

      <h3>
        {service.title}
      </h3>

      <p>
        {service.description}
      </p>

    </div>


    {/* BOTTOM */}

    <div className="service-card-bottom">

      <span>
        Explore service
      </span>

      <div className="service-arrow">

        <ArrowUpRight
          size={20}
          strokeWidth={2}
        />

      </div>

    </div>

  </article>
);


};

return (
<section
ref={servicesRef}
className={`services ${
        headerVisible
          ? "services-visible"
          : ""
      }`}
>

  <div className="services-container">


    {/* =================================
        SECTION HEADER
    ================================= */}

    <div
      className={`services-header services-animation-header ${
        headerVisible
          ? "header-visible"
          : ""
      }`}
    >

      <div className="services-heading">

        <p className="services-label">
          What I Do
        </p>

        <h2>
          Building for{" "}
          <span>
            the modern web.
          </span>
        </h2>

      </div>


      <p className="services-intro">
        I combine clean code, thoughtful design and
        modern technologies to create digital
        experiences that are functional, responsive
        and enjoyable to use.
      </p>

    </div>


    {/* =================================
        FIRST TWO CARDS
    ================================= */}

    <div
      ref={topCardsRef}
      className={`services-grid services-top-grid ${
        topCardsVisible
          ? "cards-visible"
          : ""
      }`}
    >

      {services
        .slice(0, 2)
        .map(renderCard)}

    </div>


    {/* =================================
        LAST TWO CARDS
    ================================= */}

    <div
      ref={bottomCardsRef}
      className={`services-grid services-bottom-grid ${
        bottomCardsVisible
          ? "cards-visible"
          : ""
      }`}
    >

      {services
        .slice(2, 4)
        .map(renderCard)}

    </div>


    {/* =================================
        FOOTER
    ================================= */}

    <div
      ref={footerRef}
      className={`services-footer services-animation-footer ${
        footerVisible
          ? "footer-visible"
          : ""
      }`}
    >

      <p>
        Interested in working together?
      </p>

      <span>
        Let's build something great.
      </span>

    </div>

  </div>

</section>


);
}

export default Services;
