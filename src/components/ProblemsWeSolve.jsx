import React, { useEffect, useRef } from 'react';
import './ProblemsWeSolve.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';

const ProblemsWeSolve = () => {
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sc-problems" id="problems" ref={sectionRef}>


      {/* Ambient blobs */}
      <div className="sv-ambient-blob sv-ambient-blob--1" aria-hidden="true" />
      <div className="sv-ambient-blob sv-ambient-blob--2" aria-hidden="true" />

      <div className="sc-problems__bg-glow sc-problems__bg-glow--top"></div>
      <div className="sc-problems__bg-glow sc-problems__bg-glow--bottom"></div>
      
      <div className="sc-problems__container">
        
        {/* Section Header */}
        <div className="sc-problems__header animate-on-scroll">
          <div className="sc-badge sc-problems__badge">
            <span className="sc-badge__pulse" aria-hidden="true"></span>
            <span className="sc-badge__text">Problems We Solve</span>
          </div>
          <h2 className="sc-problems__title">
            Solving The Challenges That <span className="text-gradient">Hold Businesses Back</span>
          </h2>
          <p className="sc-problems__subtitle">
            Businesses often struggle with inefficient workflows, disconnected systems, and overwhelming amounts of data. We transform these challenges into opportunities through automation, intelligent software, and scalable digital solutions.
          </p>
        </div>

        {/* Blocks */}
        <div className="sc-problems__blocks">
          
          {/* Block 1 */}
          <div className="sc-block animate-on-scroll">
            <div className="sc-block__content">
              <div className="sc-block__tag">Manual Processes → Intelligent Automation</div>
              <h3 className="sc-block__title">From Manual Processes To Intelligent Automation</h3>
              
              <div className="sc-block__details">
                <div className="sc-detail-group">
                  <h4 className="sc-detail-title sc-detail-title--problem">Problem</h4>
                  <p className="sc-detail-desc">Many businesses still rely on repetitive manual tasks, spreadsheets, approvals, and human intervention.</p>
                  <ul className="sc-detail-list sc-detail-list--problem">
                    <li>Delays</li>
                    <li>Human Errors</li>
                    <li>Higher Costs</li>
                    <li>Reduced Productivity</li>
                  </ul>
                </div>
                
                <div className="sc-detail-group">
                  <h4 className="sc-detail-title sc-detail-title--solution">Solution</h4>
                  <p className="sc-detail-desc">We build:</p>
                  <ul className="sc-detail-list sc-detail-list--solution">
                    <li>Workflow Automation Systems</li>
                    <li>Business Process Automation</li>
                    <li>AI-Powered Automation</li>
                    <li>Smart Approval Flows</li>
                    <li>Automated Notifications</li>
                  </ul>
                </div>
              </div>

              <div className="sc-block__results">
                <span>✓ Save Time</span>
                <span>✓ Reduce Errors</span>
                <span>✓ Increase Productivity</span>
                <span>✓ Lower Operational Costs</span>
              </div>
            </div>
            
            <div className="sc-block__visual sc-block__visual--glow-1">
              <div className="sc-block__image-wrapper">
                <img src={image1} alt="Intelligent Automation" className="sc-block__image" />
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="sc-block sc-block--reverse animate-on-scroll">
            <div className="sc-block__content">
              <div className="sc-block__tag">Disconnected Systems → Unified Ecosystem</div>
              <h3 className="sc-block__title">Transforming Disconnected Systems Into Unified Platforms</h3>
              
              <div className="sc-block__details">
                <div className="sc-detail-group">
                  <h4 className="sc-detail-title sc-detail-title--problem">Problem</h4>
                  <p className="sc-detail-desc">Many businesses use multiple tools that don't communicate with each other (CRM, Accounting, Inventory, Analytics).</p>
                  <ul className="sc-detail-list sc-detail-list--problem">
                    <li>Data Silos</li>
                    <li>Duplicate Work</li>
                    <li>Reporting Issues</li>
                    <li>Operational Complexity</li>
                  </ul>
                </div>
                
                <div className="sc-detail-group">
                  <h4 className="sc-detail-title sc-detail-title--solution">Solution</h4>
                  <p className="sc-detail-desc">We build:</p>
                  <ul className="sc-detail-list sc-detail-list--solution">
                    <li>API Integrations</li>
                    <li>Full Stack Platforms</li>
                    <li>Enterprise Systems</li>
                    <li>SaaS Solutions</li>
                    <li>Centralized Dashboards</li>
                  </ul>
                </div>
              </div>

              <div className="sc-block__results">
                <span>✓ Connected Workflows</span>
                <span>✓ Real-Time Data</span>
                <span>✓ Better Collaboration</span>
                <span>✓ Improved Efficiency</span>
              </div>
            </div>
            
            <div className="sc-block__visual sc-block__visual--glow-2">
              <div className="sc-block__image-wrapper">
                <img src={image2} alt="Unified Platforms" className="sc-block__image" />
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="sc-block animate-on-scroll">
            <div className="sc-block__content">
              <div className="sc-block__tag">Messy Data → AI-Powered Insights</div>
              <h3 className="sc-block__title">Turning Data Into Actionable Intelligence</h3>
              
              <div className="sc-block__details">
                <div className="sc-detail-group">
                  <h4 className="sc-detail-title sc-detail-title--problem">Problem</h4>
                  <p className="sc-detail-desc">Businesses collect large amounts of data but struggle to turn it into meaningful insights.</p>
                  <ul className="sc-detail-list sc-detail-list--problem">
                    <li>Poor Decisions</li>
                    <li>Missed Opportunities</li>
                    <li>Slow Reporting</li>
                    <li>Limited Visibility</li>
                  </ul>
                </div>
                
                <div className="sc-detail-group">
                  <h4 className="sc-detail-title sc-detail-title--solution">Solution</h4>
                  <p className="sc-detail-desc">We build:</p>
                  <ul className="sc-detail-list sc-detail-list--solution">
                    <li>Analytics Dashboards</li>
                    <li>AI Solutions</li>
                    <li>Business Intelligence Platforms</li>
                    <li>Machine Learning Systems</li>
                    <li>Predictive Analytics</li>
                  </ul>
                </div>
              </div>

              <div className="sc-block__results">
                <span>✓ Smarter Decisions</span>
                <span>✓ Better Forecasting</span>
                <span>✓ Real-Time Insights</span>
                <span>✓ Data-Driven Growth</span>
              </div>
            </div>
            
            <div className="sc-block__visual sc-block__visual--glow-3">
              <div className="sc-block__image-wrapper">
                <img src={image3} alt="AI-Powered Insights" className="sc-block__image" />
              </div>
            </div>
          </div>

        </div>

        {/* Closing Section */}
        <div className="sc-problems__closing animate-on-scroll">
          <h3 className="sc-problems__closing-title">Technology That Solves Real Business Problems</h3>
          <p className="sc-problems__closing-desc">
            We don't just build software. We create intelligent systems that automate operations, connect platforms, and transform data into actionable insights, helping businesses scale faster and operate smarter.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemsWeSolve;
