import React, { useEffect, useRef, useState } from 'react';
import './Services.css';

/* ═══════════════════════════════════════════════════════════════
   SERVICES — Premium 3x2 Grid with Glowing Cards
   ═══════════════════════════════════════════════════════════════ */

const SERVICES = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    icon: '💻',
    color: '#6366f1',
    glow: 'rgba(99,102,241,0.25)',
    items: ['Custom Web Applications', 'Enterprise Software', 'Business Platforms', 'Admin Dashboards', 'Real-Time Applications'],
    tagline: 'End-to-end software development from frontend to backend.',
    flow: ['Frontend', 'Backend', 'Database'],
  },
  {
    id: 'saas',
    title: 'SaaS Development',
    icon: '☁️',
    color: '#22d3ee',
    glow: 'rgba(34,211,238,0.25)',
    items: ['Multi-Tenant SaaS', 'Subscription Systems', 'Billing Integrations', 'User Management', 'Analytics Dashboards'],
    tagline: 'Scalable SaaS platforms designed for growth.',
    flow: ['Users', 'Subscription', 'Analytics'],
  },
  {
    id: 'ai',
    title: 'AI Solutions',
    icon: '🤖',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.25)',
    items: ['AI Chatbots', 'AI Agents', 'LLM Integrations', 'RAG Systems', 'Custom AI Applications'],
    tagline: 'Transforming workflows with intelligent systems.',
    flow: ['Data', 'Model', 'AI Response'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    icon: '🧠',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.25)',
    items: ['Predictive Models', 'Recommendation Engines', 'Data Intelligence', 'Custom ML Models'],
    tagline: 'Turning data into actionable insights.',
    flow: ['Raw Data', 'Training', 'Prediction'],
  },
  {
    id: 'automation',
    title: 'Automation Systems',
    icon: '⚡',
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.25)',
    items: ['Business Automation', 'CRM Automation', 'API Integrations', 'Workflow Automation', 'Process Optimization'],
    tagline: 'Reduce manual work and improve efficiency.',
    flow: ['Trigger', 'Workflow', 'Result'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    icon: '🛡️',
    color: '#14f195',
    glow: 'rgba(20,241,149,0.25)',
    items: ['AWS Deployments', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Monitoring'],
    tagline: 'Secure and scalable cloud infrastructure.',
    flow: ['Code', 'Pipeline', 'Deploy'],
  },
];

const METRICS = [
  { icon: '🌐', text: 'Web Applications' },
  { icon: '☁️', text: 'SaaS Platforms' },
  { icon: '🤖', text: 'AI Solutions' },
  { icon: '⚡', text: 'Automation Systems' },
  { icon: '🛡️', text: 'Cloud Infrastructure' },
];

const Services = () => {
  const sectionRef = useRef(null);
  const [visibleNodes, setVisibleNodes] = useState(0);
  const [metricsVisible, setMetricsVisible] = useState(false);
  const [closingVisible, setClosingVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  /* ─── Intersection Observer ─── */
  useEffect(() => {
    const el = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          runAnimationSequence();
        }
      },
      { threshold: 0.12 }
    );
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [hasAnimated]);

  const runAnimationSequence = () => {
    // Cards appear one by one with a fast stagger
    for (let i = 1; i <= 6; i++) {
      setTimeout(() => setVisibleNodes(i), i * 150);
    }
    setTimeout(() => setMetricsVisible(true), 6 * 150 + 300);
    setTimeout(() => setClosingVisible(true), 6 * 150 + 700);
  };

  // Mouse move handler for premium glow effect
  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`sv-card-${index}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="sv-section" id="services" ref={sectionRef}>


      {/* Ambient blobs */}
      <div className="sv-ambient-blob sv-ambient-blob--1" aria-hidden="true" />
      <div className="sv-ambient-blob sv-ambient-blob--2" aria-hidden="true" />

      {/* ── Header ── */}
      <div className={`sv-header ${hasAnimated ? 'is-visible' : ''}`}>
        <div className="sv-section-label">Engineering Solutions</div>
        <h2 className="sv-main-title">
          Engineering Solutions For Every Stage Of{' '}
          <span className="sv-gradient-text">Your Digital Journey</span>
        </h2>
        <p className="sv-subtitle">
          From modern web applications and SaaS platforms to AI-powered systems
          and business automation, we build scalable solutions designed for
          growth, performance, and innovation.
        </p>
      </div>

      {/* ── Service Grid ── */}
      <div className="sv-universe">
        <div className="sv-grid">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className={`sv-node ${i < visibleNodes ? 'is-visible' : ''}`}
              style={{
                '--node-color': service.color,
                '--node-glow': service.glow,
              }}
            >
              <div 
                className="sv-node__floater" 
                style={{ animationDelay: `${(i % 3) * -2.5}s` }}
              >
                <div 
                  className="sv-node__card" 
                  id={`sv-card-${i}`}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                >
                  {/* Dynamic Border Glow */}
                <div className="sv-node__border-glow"></div>
                
                <div className="sv-node__content">
                  <div className="sv-node__top-bar" />
                  
                  <div className="sv-node__icon-wrap">
                    <div className="sv-node__icon-glow" style={{ background: service.glow }}></div>
                    <span style={{ position: 'relative', zIndex: 2 }}>{service.icon}</span>
                  </div>
                  
                  <h3 className="sv-node__title">{service.title}</h3>
                  <ul className="sv-node__items">
                    {service.items.map((item, j) => (
                      <li key={j} className="sv-node__item" style={{ '--item-index': j }}>{item}</li>
                    ))}
                  </ul>
                  
                  <div className="sv-node__spacer"></div>
                  
                  <p className="sv-node__tagline">{service.tagline}</p>

                  {/* Hover flow overlay */}
                  <div className="sv-node__flow-overlay">
                    <div className="sv-flow-container">
                      {service.flow.map((step, fi) => (
                        <React.Fragment key={fi}>
                          <div className="sv-flow-step">
                            <span className="sv-flow-step__label">{step}</span>
                          </div>
                          {fi < service.flow.length - 1 && (
                            <div className="sv-flow-arrow">↓</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/* ── Metrics ── */}
      <div className={`sv-metrics ${metricsVisible ? 'is-visible' : ''}`}>
        {METRICS.map((m, i) => (
          <div key={i} className="sv-metric" style={{ transitionDelay: `${i * 0.1}s` }}>
            <span className="sv-metric__icon">{m.icon}</span>
            <span className="sv-metric__text">{m.text}</span>
          </div>
        ))}
      </div>

      {/* ── Closing ── */}
      <div className={`sv-closing ${closingVisible ? 'is-visible' : ''}`}>
        <h3 className="sv-closing__title">Building More Than Software</h3>
        <p className="sv-closing__text">
          We don't just develop applications. We design, engineer, and scale
          complete digital ecosystems that help businesses innovate, automate,
          and grow.
        </p>
      </div>
    </section>
  );
};

export default Services;
