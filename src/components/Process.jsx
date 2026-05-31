import React, { useEffect, useRef, useState } from 'react';
import './Process.css';

const Process = () => {
  const sectionRef = useRef(null);
  const roadmapRef = useRef(null);
  const [visibleStages, setVisibleStages] = useState(0); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Node reveal animation
          let currentStage = 0;
          const interval = setInterval(() => {
            currentStage++;
            setVisibleStages(currentStage);
            
            if (currentStage >= 9) {
              clearInterval(interval);
            }
          }, 500);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      id: 1,
      title: "Discovery Call",
      icon: "📞",
      details: ["Understand Business Goals", "Project Discussion", "Requirement Gathering", "Scope Definition"]
    },
    {
      id: 2,
      title: "Requirements Analysis",
      icon: "📋",
      details: ["Feasibility Study", "Technical Stack Selection", "Risk Assessment", "Resource Allocation"]
    },
    {
      id: 3,
      title: "Strategy & Planning",
      icon: "🗺️",
      details: ["Project Roadmap", "Milestone Definition", "Architecture Design", "Budgeting & Timelines"]
    },
    {
      id: 4,
      title: "UI / UX Design",
      icon: "🎨",
      details: ["Wireframing", "Prototyping", "User Journey Mapping", "Visual Identity Creation"]
    },
    {
      id: 5,
      title: "Development",
      icon: "💻",
      details: ["Frontend Development", "Backend Development", "Database Design", "API Integrations", "AI Implementation"]
    },
    {
      id: 6,
      title: "Testing",
      icon: "🛡️",
      details: ["Unit Testing", "Integration Testing", "Security Audits", "Performance Optimization"]
    },
    {
      id: 7,
      title: "Deployment",
      icon: "🚀",
      details: ["Cloud Infrastructure", "CI/CD Pipelines", "Production Release", "Monitoring Setup"]
    },
    {
      id: 8,
      title: "Support & Scaling",
      icon: "📈",
      details: ["Continuous Monitoring", "Feature Updates", "Performance Scaling", "User Feedback Integration"]
    }
  ];

  const principles = [
    { 
      title: "Transparent Communication", 
      desc: "We keep clients informed at every stage.",
      icon: "💬"
    },
    { 
      title: "Agile Development", 
      desc: "Fast iterations and continuous improvements.",
      icon: "⚡"
    },
    { 
      title: "Quality First", 
      desc: "Every feature is tested thoroughly.",
      icon: "🏆"
    },
    { 
      title: "Long-Term Support", 
      desc: "We continue helping after launch.",
      icon: "🤝"
    }
  ];

  return (
    <section className="sc-process" id="process" ref={sectionRef}>
      <div className="sc-process__bg-glow sc-process__bg-glow--top"></div>
      <div className="sc-process__bg-glow sc-process__bg-glow--bottom"></div>
      
      <div className="sc-process__container">
        {/* Header */}
        <div className="sc-process__header">
          <div className="sc-process__badge">
            <span className="sc-process__badge-icon">⚙️</span>
            <span>Our Process</span>
          </div>
          <h2 className="sc-process__title">
            A Transparent Process Built Around <span className="text-gradient">Your Success</span>
          </h2>
          <p className="sc-process__subtitle">
            From the initial conversation to long-term support, every project follows a structured process designed to ensure clarity, collaboration, and successful outcomes.
          </p>
        </div>

        {/* Roadmap Animation */}
        <div className="sc-process__roadmap-wrapper">
          <div className="sc-process__roadmap-track">
            {[...Array(2)].map((_, setIndex) => (
              <div className="sc-process__roadmap-set" key={setIndex}>
                {stages.map((stage, index) => (
                  <React.Fragment key={`${setIndex}-${stage.id}`}>
                    {/* Node Card */}
                    <div className={`sc-process__node ${visibleStages >= stage.id ? 'is-visible' : ''}`}>
                      <div className="sc-process__card">
                        <div className="sc-process__card-icon">{stage.icon}</div>
                        <h3 className="sc-process__card-title">{stage.title}</h3>
                        
                        {/* Hover Details Dropdown */}
                        <div className="sc-process__card-hover">
                          <ul className="sc-process__card-list">
                            {stage.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Connecting Line */}
                    <div className={`sc-process__connector ${visibleStages > stage.id ? 'is-active' : ''}`}>
                      <div className="sc-process__connector-line"></div>
                    </div>
                  </React.Fragment>
                ))}
                
                {/* Final Success state */}
                <div className={`sc-process__success ${visibleStages === 9 ? 'is-visible' : ''}`}>
                   <span className="sc-process__success-icon">✨</span>
                   <span className="sc-process__success-text">Client Journey Completed</span>
                </div>

                {/* Connector loop back to the start */}
                <div className={`sc-process__connector ${visibleStages === 9 ? 'is-active' : ''}`}>
                   <div className="sc-process__connector-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Core Principles */}
        <div className="sc-process__principles">
          {principles.map((principle, index) => (
             <div className="sc-process__principle-card" key={index}>
                <div className="sc-process__principle-icon">{principle.icon}</div>
                <h4 className="sc-process__principle-title">{principle.title}</h4>
                <p className="sc-process__principle-desc">{principle.desc}</p>
             </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="sc-process__closing">
          <h3 className="sc-process__closing-title">More Than A Vendor. <span className="text-gradient">A Technology Partner.</span></h3>
          <p className="sc-process__closing-desc">
            We work closely with our clients throughout the entire product lifecycle, ensuring every solution is aligned with business goals, scalable for future growth, and built for long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
