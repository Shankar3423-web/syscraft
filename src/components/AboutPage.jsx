import React, { useEffect } from 'react';
import aboutHeroImage from '../images/abouthero.png';
import aboutDnaImage from '../images/abotdna.png';
import robotImage from '../images/robot image.png';
import teamImage from '../images/team.png';
import logoImage from '../images/logo.png';
import './AboutPage.css';

const AboutPage = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="sc-about-modal">
      <button className="sc-about-close" onClick={onClose} aria-label="Close About Page">
        &times;
      </button>

      {/* SECTION 1: ABOUT HERO */}
      <section className="sc-about-section sc-about-hero">
        <div className="sc-about-content">
          <h1 className="sc-about-heading">About SysCraft</h1>
          <h2 className="sc-about-subheading">
            Building scalable software, intelligent systems, and modern digital experiences for startups, businesses, and enterprises.
          </h2>
          <p className="sc-about-text">
            SysCraft is a software engineering company focused on creating innovative digital products through full stack development, AI solutions, SaaS platforms, and intelligent automation systems.
          </p>
        </div>
        
        {/* NEW HERO IMAGE VISUAL */}
        <div className="sc-about-hero-img-box">
          <img src={aboutHeroImage} alt="About SysCraft" className="sc-about-hero-image" />
        </div>
      </section>

      {/* SECTION 2: WHO WE ARE */}
      <section className="sc-about-section">
        <div className="sc-about-dna-img-box">
          <img src={aboutDnaImage} alt="Who We Are - DNA" className="sc-about-dna-image" />
        </div>
        <div className="sc-about-content">
          <h2 className="sc-about-heading">Who We Are</h2>
          <p className="sc-about-text">
            At SysCraft, we believe technology should solve real-world problems and create meaningful impact.
          </p>
          <p className="sc-about-text">
            We work with startups, businesses, and organizations to transform ideas into scalable digital products. From web applications and SaaS platforms to AI-powered systems and automation solutions, our goal is to build software that is reliable, scalable, and future-ready.
          </p>
          <p className="sc-about-text">
            Our approach combines innovation, engineering excellence, and a deep understanding of business needs to deliver solutions that help organizations grow and succeed.
          </p>
        </div>
      </section>

      {/* SECTION 3: WHAT WE BUILD */}
      <section className="sc-about-section">
        <div className="sc-about-content">
          <h2 className="sc-about-heading">What We Build</h2>
          <p className="sc-about-text">
            We specialize in designing and developing modern digital solutions that help businesses innovate and scale.
          </p>
          
          <div className="sc-about-grid">
            <div className="sc-about-card">
              <h4>Full Stack Applications</h4>
              <p>Custom web applications, dashboards, portals, and enterprise software.</p>
            </div>
            <div className="sc-about-card">
              <h4>SaaS Platforms</h4>
              <p>Cloud-based software products designed for growth and scalability.</p>
            </div>
            <div className="sc-about-card">
              <h4>AI Solutions</h4>
              <p>AI-powered applications, intelligent assistants, and data-driven systems.</p>
            </div>
            <div className="sc-about-card">
              <h4>Automation Systems</h4>
              <p>Workflow automation, process optimization, and intelligent business operations.</p>
            </div>
          </div>
        </div>
        
        <div className="sc-about-robot-img-box">
          <img src={robotImage} alt="What We Build - AI Robot" className="sc-about-robot-image" />
        </div>
      </section>

      {/* SECTION 4: OUR TEAM */}
      <section className="sc-about-section sc-team-section">
        {/* Left Side: Team Image */}
        <div className="sc-about-team-img-box">
          <img src={teamImage} alt="Our Team" className="sc-about-team-image" />
        </div>

        {/* Right Side: Text & Highlights */}
        <div className="sc-about-team-content">
          <h2 className="sc-about-heading">Our Team</h2>
          <p className="sc-about-text">
            Our team consists of passionate software engineers and technology enthusiasts dedicated to building impactful digital products.
          </p>
          <p className="sc-about-text">
            With experience in full stack development, AI, SaaS engineering, and automation systems, we focus on delivering high-quality solutions while continuously learning and adapting to emerging technologies.
          </p>
          <p className="sc-about-text">
            We believe in collaboration, innovation, transparency, and long-term partnerships.
          </p>
          
          <div className="sc-about-highlights" style={{ marginTop: '24px' }}>
            <div className="sc-about-highlight-item">✔️ 3+ Years Project Development Experience</div>
            <div className="sc-about-highlight-item">✔️ Full Stack Development Expertise</div>
            <div className="sc-about-highlight-item">✔️ AI & Automation Focus</div>
            <div className="sc-about-highlight-item">✔️ Continuous Learning & Innovation</div>
            <div className="sc-about-highlight-item">✔️ Commitment To Quality</div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="sc-about-section sc-about-cta-section">
        {/* Left Side: Logo */}
        <div className="sc-about-cta-logo-box">
          <img src={logoImage} alt="SysCraft Logo" className="sc-about-cta-logo" />
        </div>

        {/* Right Side: CTA Content */}
        <div className="sc-about-cta-content">
          <h2 className="sc-about-heading" style={{ fontSize: 'clamp(28px, 4vw, 48px)', textAlign: 'left' }}>Let's Build Something Amazing Together</h2>
          <p className="sc-about-text" style={{ fontSize: '18px', textAlign: 'left' }}>
            Whether you're launching a startup, building a SaaS platform, developing an AI solution, or automating business processes, SysCraft is ready to help turn your ideas into reality.
          </p>
          <div className="sc-about-btn-group" style={{ justifyContent: 'flex-start' }}>
            <a href="#contact" className="sc-btn sc-btn--primary" onClick={onClose}>
              🚀 Book A Discovery Call
            </a>
            <a href="#contact" className="sc-btn sc-btn--secondary" onClick={onClose}>
              📩 Let's Discuss Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
