import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import './TechStack.css';

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '⚛️',
    color: '#00D4FF',
    description: 'Immersive and lightning-fast user interfaces.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue.js', 'Three.js']
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    color: '#7C3AED',
    description: 'Robust, scalable server-side systems.',
    technologies: ['Node.js', 'Python', 'Go', 'Rust', 'Java', 'C#']
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: '🏗️',
    color: '#8B5CF6',
    description: 'Enterprise and rapid development frameworks.',
    technologies: ['Django', 'Flask', 'Spring Boot', 'Servlets', 'Hibernate', 'Express.js', 'NestJS']
  },
  {
    id: 'database',
    title: 'Databases',
    icon: '🗄️',
    color: '#F59E0B',
    description: 'High-performance data storage and caching.',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Supabase']
  },
  {
    id: 'cloud',
    title: 'Cloud',
    icon: '☁️',
    color: '#14F195',
    description: 'Enterprise-grade cloud infrastructure.',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'Terraform', 'CI/CD']
  },
  {
    id: 'aiml',
    title: 'AI & ML',
    icon: '🧠',
    color: '#EC4899',
    description: 'State-of-the-art machine learning models.',
    technologies: ['OpenAI', 'LangChain', 'LangGraph', 'LlamaIndex', 'Pinecone', 'AutoGen', 'Hugging Face']
  },
  {
    id: 'automation',
    title: 'Automation',
    icon: '⚡',
    color: '#EF4444',
    description: 'Intelligent workflow and pipeline automation.',
    technologies: ['n8n', 'Zapier', 'Make', 'Webhooks', 'Airflow', 'Activepieces']
  }
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const [phase, setPhase] = useState('idle'); // idle -> deck -> dealing -> flipping -> settled
  const [offsets, setOffsets] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);

  const calculateOffsets = () => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    
    const centerX = wrapper.offsetWidth / 2;
    const centerY = (wrapper.offsetHeight / 2) - 50; 

    const newOffsets = {};
    techCategories.forEach((cat, idx) => {
      const card = document.getElementById(`apple-card-${idx}`);
      if (card) {
        const cardCenterX = card.offsetLeft + card.offsetWidth / 2;
        const cardCenterY = card.offsetTop + card.offsetHeight / 2;
        
        newOffsets[idx] = {
          x: centerX - cardCenterX,
          y: centerY - cardCenterY
        };
      }
    });
    setOffsets(newOffsets);
  };

  useLayoutEffect(() => {
    setTimeout(calculateOffsets, 100);
    window.addEventListener('resize', calculateOffsets);
    return () => window.removeEventListener('resize', calculateOffsets);
  }, []);

  // EVEN SLOWER, ULTRA-SMOOTH CINEMATIC ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          setPhase('deck');
          
          // Extremely slow wait before dealing
          setTimeout(() => {
            setPhase('dealing');
          }, 2000);
          
          // Extremely slow flight time + stagger time before flipping
          setTimeout(() => {
            setPhase('flipping');
          }, 6000); 
          
          // Settle interactive mode completely at the end
          setTimeout(() => {
            setPhase('settled');
          }, 9000);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, [hasAnimated]);

  const handleMouseMove = (e, index) => {
    if (phase !== 'settled') return;
    
    const card = document.getElementById(`apple-card-${index}`);
    const innerCard = card.querySelector('.ts-apple-card-inner');
    if (!card || !innerCard) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    innerCard.style.setProperty('--rotate-x', `${rotateX}deg`);
    innerCard.style.setProperty('--rotate-y', `${rotateY}deg`);
    innerCard.style.setProperty('--mouse-x', `${x}px`);
    innerCard.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = (index) => {
    if (phase !== 'settled') return;
    
    const card = document.getElementById(`apple-card-${index}`);
    const innerCard = card.querySelector('.ts-apple-card-inner');
    if (!card || !innerCard) return;
    
    innerCard.style.setProperty('--rotate-x', `0deg`);
    innerCard.style.setProperty('--rotate-y', `0deg`);
    innerCard.style.setProperty('--mouse-x', `-1000px`);
    innerCard.style.setProperty('--mouse-y', `-1000px`);
  };

  const renderCard = (category, index) => {
    let containerTransform = '';
    let innerTransform = '';
    let zIndex = 7 - index; 
    let opacity = phase === 'idle' ? 0 : 1;
    let transitionDelay = '0s';

    const offset = offsets[index] || { x: 0, y: 0 };

    if (phase === 'deck') {
      containerTransform = `translate(${offset.x}px, ${offset.y}px) translateZ(${index * -3}px)`;
      innerTransform = `rotateY(180deg)`;
      transitionDelay = '0s';
    } 
    else if (phase === 'dealing') {
      containerTransform = `translate(0px, 0px) translateZ(0px)`;
      innerTransform = `rotateY(180deg)`;
      transitionDelay = `${index * 0.3}s`; // Ultra slow stagger
    }
    else if (phase === 'flipping') {
      containerTransform = `translate(0px, 0px) translateZ(0px)`;
      innerTransform = `rotateY(0deg)`;
      transitionDelay = `${index * 0.25}s`; // Ultra slow stagger
    }
    else if (phase === 'settled') {
      containerTransform = `translate(0px, 0px) translateZ(0px)`;
      innerTransform = `rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))`;
      transitionDelay = '0s';
    }

    return (
      <div 
        className={`ts-apple-card-container phase-${phase}`} 
        key={category.id}
        id={`apple-card-${index}`}
        onMouseMove={(e) => handleMouseMove(e, index)}
        onMouseLeave={() => handleMouseLeave(index)}
        style={{ 
          '--theme-color': category.color,
          transform: containerTransform,
          opacity: opacity,
          zIndex: zIndex,
          transitionDelay: transitionDelay
        }}
      >
        <div 
          className="ts-apple-card-inner"
          style={{ 
            transform: innerTransform,
            transitionDelay: phase !== 'settled' ? transitionDelay : '0s' 
          }}
        >
          {/* Static Glowing Edge Background */}
          <div className="ts-static-edge"></div>

          {/* ─── FRONT OF CARD ─── */}
          <div className="ts-apple-card-front">
            <div className="ts-apple-glare"></div>
            
            <div className="ts-apple-content">
              <div className="ts-apple-header">
                <div className="ts-apple-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3 className="ts-apple-title">{category.title}</h3>
              </div>
              
              <p className="ts-apple-desc">{category.description}</p>

              <div className="ts-apple-tech-list">
                {category.technologies.map((tech, i) => (
                  <span key={i} className="ts-apple-tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ─── BACK OF CARD (Ultra Minimal Symbol) ─── */}
          <div className="ts-apple-card-back">
            <div className="ts-card-back-branding">
              <div className="ts-back-symbol" style={{ color: category.color }}>
                {category.icon}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <section 
      className="ts-apple-section" 
      id="technologies"
      ref={sectionRef}
    >


      <div className="ts-container">
        <div className={`ts-apple-header-section ${phase !== 'deck' ? 'is-visible' : ''}`}>
          <h2 className="ts-apple-main-title">
            Our Technology <span className="ts-text-gradient">Stack.</span>
          </h2>
          <p className="ts-apple-subtitle">
            Modern frameworks and tools we use to build scalable, high-performance digital products.
          </p>
        </div>

        <div className="ts-apple-grid-wrapper" ref={wrapperRef}>
          <div className="ts-apple-row top-row">
            {techCategories.slice(0, 4).map((category, index) => renderCard(category, index))}
          </div>

          <div className="ts-apple-row bottom-row">
            {techCategories.slice(4, 7).map((category, index) => renderCard(category, index + 4))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
