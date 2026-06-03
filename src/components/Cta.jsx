import { useEffect, useRef } from 'react';
import './Cta.css';

const Cta = () => {
  const ctaRef = useRef(null);

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

    const elements = ctaRef.current.querySelectorAll('.sc-cta__animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const trustIndicators = [
    'Full Stack Development',
    'SaaS Engineering',
    'AI Solutions',
    'Business Automation',
    'Cloud Infrastructure'
  ];

  // const floatingLabels = [
  //   'Web Applications',
  //   'SaaS Platforms',
  //   'AI Solutions',
  //   'Automation',
  //   'Enterprise Software'
  // ];

  return (
    <section className="sc-cta" id="contact" ref={ctaRef}>
      {/* Background Effects */}
      <div className="sc-cta__bg">
        <div className="sc-cta__bg-gradient sc-cta__animate delay-1" />
        <div className="sc-cta__particles" aria-hidden="true" />
      </div>

      <div className="sc-cta__container">
        
        {/* Left Content */}
        <div className="sc-cta__content">
          <h2 className="sc-cta__heading sc-cta__animate delay-2">
            Ready To Build Your Next <span className="sc-cta__highlight">Digital Product?</span>
          </h2>
          
          <p className="sc-cta__description sc-cta__animate delay-3">
            Whether you're building a startup MVP, launching a SaaS platform, developing an AI-powered solution, or automating business operations, SysCraft helps transform ambitious ideas into scalable digital products.
          </p>

          <div className="sc-cta__trust-indicators sc-cta__animate delay-4">
            {trustIndicators.map((indicator, index) => (
              <span key={index} className="sc-cta__trust-item">
                <span className="sc-cta__check">✓</span> {indicator}
              </span>
            ))}
          </div>



          <div className="sc-cta__highlights sc-cta__animate delay-5">
            <span>Response Within 24 Hours</span>
            <span className="sc-cta__dot">•</span>
            <span>Free Initial Consultation</span>
            <span className="sc-cta__dot">•</span>
            <span>Transparent Development Process</span>
          </div>
        </div>

        {/* Right Form Element */}
        <div className="sc-cta__form-wrapper sc-cta__animate delay-6">
          <form className="sc-cta__form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="1c047cd9-783d-45d3-80ec-2b505c5e5dda" />
            
            <h3 className="sc-cta__form-title">Tell Us About Your Project</h3>
            
            <div className="sc-cta__form-group">
              <label htmlFor="name" className="sc-cta__form-label">Full Name</label>
              <input type="text" id="name" name="name" className="sc-cta__form-input" placeholder="John Doe" required />
            </div>

            <div className="sc-cta__form-row">
              <div className="sc-cta__form-group">
                <label htmlFor="email" className="sc-cta__form-label">Email Address</label>
                <input type="email" id="email" name="email" className="sc-cta__form-input" placeholder="john@company.com" required />
              </div>
              
              <div className="sc-cta__form-group">
                <label htmlFor="company" className="sc-cta__form-label">Company (Optional)</label>
                <input type="text" id="company" name="company" className="sc-cta__form-input" placeholder="Your Company" />
              </div>
            </div>

            <div className="sc-cta__form-group">
              <label htmlFor="requirement" className="sc-cta__form-label">Project Requirement</label>
              <textarea id="requirement" name="message" className="sc-cta__form-textarea" placeholder="Briefly describe what you're looking to build..." rows="4" required></textarea>
            </div>

            <button type="submit" className="sc-cta__form-submit">
              Send Message
              <span className="sc-cta__submit-icon">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="sc-cta__closing sc-cta__animate delay-6">
        <h3 className="sc-cta__closing-heading">Building Technology That Drives Growth</h3>
        <p className="sc-cta__closing-text">
          Partner with SysCraft to build scalable software, intelligent systems, and future-ready digital experiences designed to help your business grow.
        </p>
      </div>
    </section>
  );
};

export default Cta;
