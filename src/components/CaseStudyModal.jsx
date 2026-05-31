import React, { useEffect } from 'react';
import './CaseStudyModal.css';

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    // Escape key to close
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="sc-case-study-overlay">
      <div className="sc-case-study-modal sc-animate-zoom-in">
        
        {/* Header / Nav */}
        <div className="sc-case-study__nav">
          <button className="sc-case-study__back-btn" onClick={onClose}>
            <span className="arrow">←</span> Back To Projects
          </button>
          <div className="sc-case-study__brand">SysCraft Case Study</div>
        </div>

        {/* Hero Banner */}
        <div className="sc-case-study__hero">
          <img src={project.image} alt={project.title} className="sc-case-study__hero-bg" />
          <div className="sc-case-study__hero-overlay"></div>
          <div className="sc-case-study__hero-content">
            <span className="sc-case-study__category">{project.category}</span>
            <h1 className="sc-case-study__title">{project.title}</h1>
            <p className="sc-case-study__tagline">{project.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="sc-case-study__body">
          
          <div className="sc-case-study__grid">
            {/* Main Content Column */}
            <div className="sc-case-study__main">
              {project.caseStudy?.sections.map((section, index) => (
                <section className="sc-cs-section" key={index}>
                  <h2 className="sc-cs-section__title">{section.title}</h2>
                  
                  {section.content && section.content.map((text, i) => (
                    <p key={i} className="sc-cs-section__text">{text}</p>
                  ))}

                  {section.list && (
                    <ul className="sc-cs-section__list">
                      {section.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}

                  {section.features && (
                    <div className="sc-cs-features-grid">
                      {section.features.map((feature, i) => (
                        <div key={i} className="sc-cs-feature-item">
                          <h4 className="sc-cs-feature-title">{feature.name}</h4>
                          <p className="sc-cs-feature-desc">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.roles && (
                    <div className="sc-cs-roles">
                      {section.roles.map((role, i) => (
                        <div key={i} className="sc-cs-role">
                          <h4 className="sc-cs-role-title">{role.name}</h4>
                          <ul className="sc-cs-section__list">
                            {role.items.map((item, j) => <li key={j}>{item}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === 'workflow' && section.steps && (
                    <div className="sc-cs-workflow">
                      {section.steps.map((step, i) => (
                        <React.Fragment key={i}>
                          <div className="sc-cs-workflow-step">{step}</div>
                          {i < section.steps.length - 1 && <div className="sc-cs-workflow-arrow">↓</div>}
                        </React.Fragment>
                      ))}
                    </div>
                  )}

                  {section.type === 'impact' && section.items && (
                    <div className="sc-cs-impact-list">
                      {section.items.map((item, i) => (
                        <div key={i} className="sc-cs-impact-item">
                          <span className="check">✓</span> {item}
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Sidebar Column */}
            <div className="sc-case-study__sidebar">
              
              <div className="sc-cs-widget">
                <h3 className="sc-cs-widget__title">Technology Stack</h3>
                <div className="sc-cs-tech-grid">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="sc-cs-tech-item">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="sc-case-study__footer">
            <button className="sc-btn sc-btn--primary" onClick={onClose}>
              Close Case Study
              <span className="sc-btn__shine" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
