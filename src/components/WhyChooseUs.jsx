import React, { useEffect, useRef } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.sc-reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const typicalAgencies = [
    "Focus only on development",
    "Limited AI expertise",
    "Generic solutions",
    "Poor scalability",
    "Minimal support",
    "One-size-fits-all approach"
  ];

  const sysCraft = [
    "End-to-End Product Development",
    "Full Stack + AI Expertise",
    "Custom-Built Solutions",
    "Cloud-Native Architecture",
    "Long-Term Partnership",
    "Business-Focused Engineering"
  ];

  const coreAdvantages = [
    {
      title: "Full Stack & AI",
      desc: "End-to-end engineering with modern AI integration.",
      icon: "🚀"
    },
    {
      title: "Scalable & Business-First",
      desc: "Architecture built for growth, aligned with your goals.",
      icon: "📈"
    },
    {
      title: "Transparent & Supported",
      desc: "Clear communication and continuous post-launch support.",
      icon: "🤝"
    }
  ];

  return (
    <section className="sc-why" id="why-choose-us" ref={containerRef}>
      <div className="sc-why__bg-glow sc-why__bg-glow--top" aria-hidden="true" />
      <div className="sc-why__bg-glow sc-why__bg-glow--bottom" aria-hidden="true" />

      <div className="sc-why__container">
        {/* Header */}
        <div className="sc-why__header sc-reveal-up">
          <div className="sc-why__badge">
            <span className="sc-badge-icon">⚖️</span>
            <span>The SysCraft Difference</span>
          </div>
          <h2 className="sc-why__title">
            Why Businesses Choose <span className="text-gradient">SysCraft</span>
          </h2>
          <p className="sc-why__subtitle">
            We combine software engineering, AI innovation, and long-term partnership to build solutions that deliver measurable business value.
          </p>
        </div>

        {/* Comparison Layout */}
        <div className="sc-why__comparison sc-reveal-up" style={{ transitionDelay: '0.1s' }}>
          <div className="sc-why__comparison-side sc-why__comparison-side--typical">
            <h3 className="sc-why__side-title">
              Typical Agencies
            </h3>
            <ul className="sc-why__list">
              {typicalAgencies.map((item, index) => (
                <li key={index} className="sc-why__list-item sc-why__list-item--cross">
                  <span className="sc-why__icon">❌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sc-why__vs-badge">VS</div>

          <div className="sc-why__comparison-side sc-why__comparison-side--syscraft">
            <h3 className="sc-why__side-title text-gradient">
              SysCraft
            </h3>
            <ul className="sc-why__list">
              {sysCraft.map((item, index) => (
                <li key={index} className="sc-why__list-item sc-why__list-item--check">
                  <span className="sc-why__icon">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Core Advantages */}
        <div className="sc-why__advantages sc-reveal-up" style={{ transitionDelay: '0.2s' }}>
          {coreAdvantages.map((adv, index) => (
            <div key={index} className="sc-why__advantage-card sc-reveal-up" style={{ transitionDelay: `${0.2 + (index * 0.1)}s` }}>
              <div className="sc-why__advantage-icon">{adv.icon}</div>
              <h4 className="sc-why__advantage-title">{adv.title}</h4>
              <p className="sc-why__advantage-desc">{adv.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="sc-why__closing sc-reveal-up" style={{ transitionDelay: '0.3s' }}>
          <h3 className="sc-why__closing-title">Building More Than Applications</h3>
          <p className="sc-why__closing-desc">
            We help businesses transform ideas into scalable digital products through modern engineering, AI innovation, and long-term technology partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
