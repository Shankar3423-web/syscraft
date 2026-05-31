import { useEffect, useRef } from 'react';
import logoImage from '../images/logo.png';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

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

    const elements = footerRef.current.querySelectorAll('.sc-footer__animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="sc-footer" ref={footerRef}>
      {/* Pre-Footer CTA Strip */}
      <div className="sc-footer__cta-strip sc-footer__animate">
        <div className="sc-footer__cta-content">
          <h3 className="sc-footer__cta-text">Ready To Build Your Next Product?</h3>
          <a href="#contact" className="sc-btn sc-btn--primary sc-footer__cta-btn" onClick={(e) => scrollToSection(e, 'contact')}>
            Book A Discovery Call
          </a>
        </div>
      </div>

      <div className="sc-footer__main">
        <div className="sc-footer__container">
          {/* Column 1: Brand & Info */}
          <div className="sc-footer__col sc-footer__col--brand sc-footer__animate delay-1">
            <a href="#home" className="sc-footer__logo-link" onClick={(e) => scrollToSection(e, 'home')}>
              <img src={logoImage} alt="SysCraft Logo" className="sc-footer__logo" />
              <span className="sc-footer__company">SysCraft</span>
            </a>
            <p className="sc-footer__desc">
              Building scalable software, intelligent systems, and future-ready digital products through full stack engineering, AI innovation, and business automation.
            </p>
            <div className="sc-footer__social">
              <a href="#" className="sc-footer__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="#" className="sc-footer__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="sc-footer__social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="mailto:your@email.com" className="sc-footer__social-link" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="sc-footer__col sc-footer__animate delay-2">
            <h4 className="sc-footer__heading">Company</h4>
            <ul className="sc-footer__links">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>Services</a></li>
              <li><a href="#industries" onClick={(e) => scrollToSection(e, 'industries')}>Industries</a></li>
              <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
              <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')}>Process</a></li>
              <li><a href="#why-choose-us" onClick={(e) => scrollToSection(e, 'why-choose-us')}>Why Choose SysCraft</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="sc-footer__col sc-footer__animate delay-3">
            <h4 className="sc-footer__heading">Solutions</h4>
            <ul className="sc-footer__links">
              <li><span>Full Stack Development</span></li>
              <li><span>SaaS Development</span></li>
              <li><span>AI Solutions</span></li>
              <li><span>Machine Learning</span></li>
              <li><span>Business Automation</span></li>
              <li><span>Cloud Infrastructure</span></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="sc-footer__col sc-footer__animate delay-4">
            <h4 className="sc-footer__heading">Contact</h4>
            <ul className="sc-footer__contact-info">
              <li>
                <span className="sc-footer__contact-label">Email</span>
                <span className="sc-footer__contact-value">your@email.com</span>
              </li>
              <li>
                <span className="sc-footer__contact-label">Location</span>
                <span className="sc-footer__contact-value">India</span>
              </li>
              <li>
                <span className="sc-footer__contact-label">Availability</span>
                <span className="sc-footer__contact-value">Mon – Sat<br/>9:00 AM – 8:00 PM</span>
              </li>
              <li>
                <span className="sc-footer__contact-label">Response Time</span>
                <span className="sc-footer__contact-value sc-footer__contact-highlight">Within 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="sc-footer__bottom">
        <div className="sc-footer__bottom-container">
          <div className="sc-footer__bottom-left sc-footer__animate delay-5">
            <p>© 2026 SysCraft. All Rights Reserved.</p>
            <p className="sc-footer__subtle-statement">Built with innovation, powered by modern technology.</p>
          </div>
          
          <div className="sc-footer__bottom-right sc-footer__animate delay-6">
            <a href="#" className="sc-footer__legal-link">Privacy Policy</a>
            <a href="#" className="sc-footer__legal-link">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
