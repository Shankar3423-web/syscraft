import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import CaseStudyModal from './CaseStudyModal';
import { projectCategories, projectsData } from '../data/projectsData';

const Projects = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sc-in-view');
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.sc-project-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const openCaseStudy = (project) => {
    setActiveCaseStudy(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="sc-projects" id="projects" ref={projectsRef}>
      <div className="sc-projects__container">
        
        <div className="sc-projects__header">
          <div className="sc-projects__heading-wrap">
            <h2 className="sc-projects__heading">Featured Projects & Case Studies</h2>
            <h3 className="sc-projects__subheading">Building Solutions That Deliver Real Impact</h3>
          </div>
          <p className="sc-projects__description">
            From scalable SaaS platforms and enterprise applications to AI systems and intelligent automation solutions, our projects demonstrate how technology can solve real-world business challenges and create measurable value.
          </p>
        </div>

        {projectCategories.map((category) => {
          const categoryProjects = projectsData.filter(p => p.category === category);
          const isAutoScroll = categoryProjects.length > 3;
          // Duplicate projects for seamless infinite marquee if auto-scrolling
          const displayProjects = isAutoScroll ? [...categoryProjects, ...categoryProjects] : categoryProjects;
          
          return (
            <div key={category} className="sc-projects__category-section">
              <div className="sc-projects__category-header">
                <h3 className="sc-projects__category-title">{category}</h3>
                <div className="sc-projects__category-line"></div>
              </div>

              <div className="sc-projects__carousel-wrapper">
                <div className={`sc-projects__carousel ${isAutoScroll ? 'auto-scroll' : 'no-scroll'}`}>
                  <div className="sc-projects__carousel-track">
                    {displayProjects.map((project, index) => (
                      <div 
                        className="sc-project-card" 
                        key={`${project.id}-${index}`}
                        style={{ animationDelay: `${(index % categoryProjects.length) * 0.1}s` }}
                      >
                        <div className="sc-project-card__image-wrap">
                          <img src={project.image} alt={project.title} className="sc-project-card__image" />
                          <div className="sc-project-card__overlay">
                            <button className="sc-project-card__read-more" onClick={() => openCaseStudy(project)}>
                              Read More <span className="arrow">→</span>
                            </button>
                          </div>
                        </div>
                        <div className="sc-project-card__content">
                          <div className="sc-project-card__tagline">{project.tagline}</div>
                          <h4 className="sc-project-card__title">{project.title}</h4>
                          <p className="sc-project-card__desc">{project.shortDescription}</p>
                          
                          <div className="sc-project-card__tech">
                            {project.techStack.map((tech, i) => (
                              <span key={i} className="sc-tech-pill">{tech}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {activeCaseStudy && (
        <CaseStudyModal project={activeCaseStudy} onClose={closeCaseStudy} />
      )}
    </section>
  );
};

export default Projects;
