import { useEffect, useRef, useState } from 'react'
import logoImage from './images/logo.png'
import Loader from './components/Loader'
import ProductJourney from './components/ProductJourney'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Industries from './components/Industries'
import ProblemsWeSolve from './components/ProblemsWeSolve'
import Projects from './components/Projects'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Cta from './components/Cta'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [siteEvolving, setSiteEvolving] = useState(false)
  const heroRef = useRef(null)

  const handleBlast = () => {
    setSiteEvolving(true);
    setTimeout(() => {
      setSiteEvolving(false);
    }, 2500); // 2.5s animation + small buffer
  };

  /* ═══ Vanilla JS magnetic button — butter-smooth lerp ═══ */
  useEffect(() => {
    // Force page to always load at the very top (Hero section)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    // Remove hash from URL if present to prevent jumping to a section
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    let rafId
    let btnTx = 0, btnTy = 0
    let curBtnTx = 0, curBtnTy = 0
    const lerp = (a, b, t) => a + (b - a) * t
    const primaryBtn = document.querySelector('.sc-btn--primary')

    const tick = () => {
      curBtnTx = lerp(curBtnTx, btnTx, 0.1)
      curBtnTy = lerp(curBtnTy, btnTy, 0.1)
      if (primaryBtn) {
        primaryBtn.style.transform = `translate(${curBtnTx}px, ${curBtnTy}px)`
      }
      rafId = requestAnimationFrame(tick)
    }
    tick()

    const onMove = e => {
      if (primaryBtn) {
        const rect = primaryBtn.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const distX = e.clientX - centerX
        const distY = e.clientY - centerY
        if (Math.abs(distX) < 100 && Math.abs(distY) < 60) {
          btnTx = distX * 0.3
          btnTy = distY * 0.3
          primaryBtn.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
          primaryBtn.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
        } else {
          btnTx = 0; btnTy = 0
        }
      }
    }
    const onLeave = () => { btnTx = 0; btnTy = 0 }

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const navLinks = ['Home', 'Services', 'Industries', 'Technologies', 'Projects', 'About', 'Contact']



  return (
    <>
      {loading && <Loader onBlast={handleBlast} onComplete={() => setLoading(false)} />}
      <div className="sc-root">
        
        {/* ═══ GLOBAL ANIMATED BACKGROUND ═══ */}
        <div className="sc-global-grid" aria-hidden="true" />

        <div className={siteEvolving ? 'sc-site-evolve' : ''}>
          {/* ═══ NAVIGATION ═══ */}
          <nav className="sc-nav" id="sc-navbar">
            <div className="sc-nav__inner">
              <a href="#" className="sc-nav__brand" id="sc-brand-link">
                <div className="sc-nav__logo-wrap">
                  <img src={logoImage} alt="SysCraft Logo" className="sc-nav__logo" />
                </div>
                <span className="sc-nav__company-name">SysCraft</span>
              </a>

              <ul className="sc-nav__links" id="sc-nav-links">
                {navLinks.map(link => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="sc-nav__link" id={`sc-nav-${link.toLowerCase()}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="sc-btn sc-btn--nav" id="sc-nav-cta">
                Book a Discovery Call
              </a>

              <button className="sc-nav__hamburger" id="sc-hamburger" aria-label="Toggle menu">
                <span /><span /><span />
              </button>
            </div>
          </nav>

          {/* ═══ HERO ═══ */}
          <section className="sc-hero" id="home" ref={heroRef}>
            <div className="sc-hero__blob sc-hero__blob--1" aria-hidden="true" />
            <div className="sc-hero__blob sc-hero__blob--2" aria-hidden="true" />
            <div className="sc-hero__blob sc-hero__blob--3" aria-hidden="true" />

            <div className="sc-hero__inner">

              {/* ── LEFT CONTENT ── */}
              <div className="sc-hero__content">

                <div className="sc-badge" id="sc-badge">
                  <span className="sc-badge__pulse" aria-hidden="true" />
                  <span className="sc-badge__icon">⚡</span>
                  <span className="sc-badge__text">
                    Full Stack Development&nbsp;•&nbsp;AI Solutions&nbsp;•&nbsp;SaaS Engineering
                  </span>
                </div>

                <h1 className="sc-hero__headline" id="sc-headline">
                  <span className="sc-reveal-wrap">
                    <span className="sc-reveal-text" style={{ animationDelay: '0.1s' }}>Building Scalable Software, </span>
                  </span>
                  <span className="sc-reveal-wrap">
                    <span className="sc-reveal-text sc-hero__headline--gradient" style={{ animationDelay: '0.2s' }}>Intelligent Systems </span>
                  </span>
                  <span className="sc-reveal-wrap">
                    <span className="sc-reveal-text" style={{ animationDelay: '0.3s' }}>&amp; Digital Experiences</span>
                  </span>
                </h1>

                <p className="sc-hero__subheadline" id="sc-subheadline">
                  We help startups and businesses transform ideas into powerful digital products through
                  full stack development, AI-powered solutions, automation systems, and scalable cloud
                  applications.
                </p>

                <div className="sc-hero__ctas" id="sc-ctas">
                  <a href="#contact" className="sc-btn sc-btn--primary" id="sc-cta-primary">
                    <span className="sc-btn__icon">📞</span>
                    Book a Discovery Call
                    <span className="sc-btn__shine" aria-hidden="true" />
                  </a>
                  <a href="#projects" className="sc-btn sc-btn--secondary" id="sc-cta-secondary">
                    <span className="sc-btn__icon">📂</span>
                    View Our Work
                  </a>
                </div>

                <p className="sc-hero__footer-text" id="sc-footer-text">
                  Transforming ambitious ideas into high-performance digital products.
                </p>
              </div>

              {/* ── RIGHT VISUAL — Product Journey Ecosystem ── */}
              <div className="sc-hero__visual" id="sc-hero-visual">
                <ProductJourney />
              </div>
            </div>

            <div className="sc-scroll-hint" id="sc-scroll-hint">
              <div className="sc-scroll-hint__line" />
              <span>Scroll</span>
            </div>
          </section>

          {/* ═══ TECH STACK ═══ */}
          <TechStack />

          {/* ═══ SERVICES ═══ */}
          <Services />

          {/* ═══ INDUSTRIES ═══ */}
          <Industries />

          {/* ═══ PROBLEMS WE SOLVE ═══ */}
          <ProblemsWeSolve />

          {/* ═══ PROJECTS ═══ */}
          <Projects />

          {/* ═══ PROCESS ═══ */}
          <Process />

          {/* ═══ WHY CHOOSE US ═══ */}
          <WhyChooseUs />

          {/* ═══ CTA ═══ */}
          <Cta />

          {/* ═══ FOOTER ═══ */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
