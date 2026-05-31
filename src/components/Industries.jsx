import React, { useEffect, useRef } from 'react';
import './Industries.css';

const industriesData = [
  {
    id: 'startups',
    icon: '🚀',
    title: 'Startups',
    color: '#f43f5e', // Rose
    solutions: ['MVP Development', 'SaaS Platforms', 'Product Engineering', 'Rapid Scaling'],
  },
  {
    id: 'ecommerce',
    icon: '🛒',
    title: 'E-commerce',
    color: '#f59e0b', // Amber
    solutions: ['Custom Storefronts', 'Payment Integration', 'Inventory Management', 'Omnichannel'],
  },
  {
    id: 'healthcare',
    icon: '🏥',
    title: 'Healthcare',
    color: '#10b981', // Emerald
    solutions: ['Patient Systems', 'Healthcare Dashboards', 'AI Diagnostics', 'Telemedicine'],
  },
  {
    id: 'finance',
    icon: '📈',
    title: 'Finance',
    color: '#3b82f6', // Blue
    solutions: ['FinTech Solutions', 'Payment Systems', 'Analytics', 'Fraud Detection'],
  },
  {
    id: 'education',
    icon: '🎓',
    title: 'Education',
    color: '#8b5cf6', // Violet
    solutions: ['EdTech Platforms', 'E-Learning Systems', 'Student Management', 'Virtual Classrooms'],
  },
  {
    id: 'realestate',
    icon: '🏢',
    title: 'Real Estate',
    color: '#ec4899', // Pink
    solutions: ['Property Portals', 'CRM Systems', 'Virtual Tours', 'Smart Building Tech'],
  },
  {
    id: 'logistics',
    icon: '🚚',
    title: 'Logistics',
    color: '#06b6d4', // Cyan
    solutions: ['Fleet Management', 'Supply Chain Tech', 'Tracking Systems', 'Route Optimization'],
  },
  {
    id: 'enterprise',
    icon: '💼',
    title: 'Enterprise',
    color: '#6366f1', // Indigo
    solutions: ['Digital Transformation', 'Legacy Modernization', 'Cloud Migration', 'Custom ERP'],
  },
];

const Industries = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const tiles = sectionRef.current.querySelectorAll('.sc-industry-tile');
    tiles.forEach((tile) => observer.observe(tile));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sc-industries" id="industries" ref={sectionRef}>


      {/* Ambient blobs */}
      <div className="sv-ambient-blob sv-ambient-blob--1" aria-hidden="true" />
      <div className="sv-ambient-blob sv-ambient-blob--2" aria-hidden="true" />

      <div className="sc-industries__container">
        {/* Header */}
        <div className="sc-industries__header">
          <h2 className="sc-industries__title">Solutions Built For Every Industry</h2>
          <p className="sc-industries__subtitle">
            We combine software engineering, AI, cloud technologies, and automation to solve real business challenges across multiple industries.
          </p>
        </div>

        {/* Marquee */}
        <div className="sc-industries__marquee-wrap">
          <div className="sc-industries__marquee">
            <span>Startups &rarr; Growing Businesses &rarr; Enterprises &rarr;&nbsp;</span>
            <span>Startups &rarr; Growing Businesses &rarr; Enterprises &rarr;&nbsp;</span>
            <span>Startups &rarr; Growing Businesses &rarr; Enterprises &rarr;&nbsp;</span>
            <span>Startups &rarr; Growing Businesses &rarr; Enterprises &rarr;&nbsp;</span>
          </div>
        </div>

        {/* Grid */}
        <div className="sc-industries__grid">
          {industriesData.map((industry, index) => (
            <div 
              className="sc-industry-tile" 
              key={industry.id}
              style={{ 
                transitionDelay: `${index * 0.05}s`,
                '--industry-color': industry.color 
              }}
            >
              <div className="sc-industry-tile__inner">
                {/* Before Hover */}
                <div className="sc-industry-tile__front">
                  <div className="sc-industry-tile__icon-wrap">
                    <div className="sc-industry-tile__icon-glow" style={{ background: industry.color }}></div>
                    <div className="sc-industry-tile__icon-glass">
                      <span className="sc-industry-tile__icon">{industry.icon}</span>
                    </div>
                  </div>
                  <h3 className="sc-industry-tile__name">{industry.title}</h3>
                </div>

                {/* After Hover */}
                <div className="sc-industry-tile__back">
                  <ul className="sc-industry-tile__solutions">
                    {industry.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="sc-industries__bottom">
          <h3 className="sc-industries__bottom-title">Technology That Adapts To Your Industry</h3>
          <p className="sc-industries__bottom-desc">
            Every industry has unique challenges. Our approach combines modern software development, cloud infrastructure, AI capabilities, and automation systems to deliver solutions tailored to specific business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
