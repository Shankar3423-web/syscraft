import React, { useEffect, useState, useMemo } from 'react';
import './Loader.css';
import logoImage from '../images/logo.png';

const Loader = ({ onComplete, onBlast }) => {
  const [phase, setPhase] = useState('loading'); // 'loading', 'assembling', 'complete', 'collapsing'
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('SYSTEM_BOOT: INIT...');

  useEffect(() => {
    if (phase !== 'loading') return;
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.floor(Math.random() * 8) + 2;
        return next > 100 ? 100 : next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (progress > 25 && progress < 50) setLoadingText('CALIBRATING_CORE_MODULES...');
    if (progress >= 50 && progress < 85) setLoadingText('ESTABLISHING_SECURE_UPLINK...');
    if (progress >= 85 && progress < 100) setLoadingText('BYPASSING_MAINFRAME_PROTOCOLS...');
    if (progress >= 100) setLoadingText('SYSTEM_ONLINE_&_READY');
  }, [progress]);

  useEffect(() => {
    let isMounted = true;
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    const sequence = async () => {
      // Phase 1: Loading text
      await new Promise(r => setTimeout(r, 2000));
      if (!isMounted) return;
      setPhase('assembling');
      
      // Phase 2: Assembling logo
      await new Promise(r => setTimeout(r, 2600));
      if (!isMounted) return;
      setPhase('complete');

      // Phase 3: Hold logo and glow
      await new Promise(r => setTimeout(r, 1200));
      if (!isMounted) return;
      setPhase('collapsing');
      
      // Wait for pieces to blast away before evolving the site
      await new Promise(r => setTimeout(r, 600));
      if (!isMounted) return;
      if (onBlast) onBlast(); // Trigger website evolution

      // Phase 4: Smooth fade out
      await new Promise(r => setTimeout(r, 1800));
      if (!isMounted) return;
      document.body.style.overflow = '';
      onComplete();
    };

    sequence();

    return () => {
      isMounted = false;
      document.body.style.overflow = '';
    };
  }, []); // Run strictly once on mount

  // Create grid of pieces inside useMemo to prevent recalculation
  const pieces = useMemo(() => {
    const gridSize = 10; // 10x10 = 100 pieces
    const items = [];

    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Assemble Start positions
        const tx = (Math.random() - 0.5) * 3000;
        const ty = (Math.random() - 0.5) * 3000;
        const tz = Math.random() * 2000 + 1000; // Fly in from front
        const rx = (Math.random() - 0.5) * 1080;
        const ry = (Math.random() - 0.5) * 1080;
        const rz = (Math.random() - 0.5) * 1080;

        // Collapse End positions
        const ctx = (Math.random() - 0.5) * 4000;
        const cty = (Math.random() - 0.5) * 4000;
        const ctz = (Math.random() - 0.5) * 3000;
        const crx = (Math.random() - 0.5) * 1080;
        const cry = (Math.random() - 0.5) * 1080;
        const crz = (Math.random() - 0.5) * 1080;
        
        items.push({
          id: `${row}-${col}`,
          left: col * (100 / gridSize),
          top: row * (100 / gridSize),
          bgX: col * (100 / (gridSize - 1)),
          bgY: row * (100 / (gridSize - 1)),
          tx, ty, tz, rx, ry, rz,
          ctx, cty, ctz, crx, cry, crz,
          delay: Math.random() * 0.8,
          cDelay: Math.random() * 0.3
        });
      }
    }
    return items;
  }, []);

  return (
    <div className={`sc-loader-overlay ${phase === 'collapsing' ? 'fade-out' : ''}`}>
      {phase === 'loading' && (
        <div className="sc-loader-text">
          <div className="sc-loader-progress-bar">
            <div className="sc-loader-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="sc-loader-text-inner">
            <span className="sc-loader-percentage">{progress}%</span>
            <h2>{loadingText}</h2>
          </div>
        </div>
      )}

      <div className={`sc-loader-logo-container ${phase}`}>
        {/* Invisible image to dictate the container's aspect ratio based on original logo */}
        <img 
          src={logoImage} 
          alt="" 
          style={{ width: '100%', height: 'auto', opacity: 0, display: 'block' }} 
        />
        
        {pieces.map(p => (
          <div
            key={p.id}
            className="sc-loader-piece"
            style={{
              '--tx': `${p.tx}px`,
              '--ty': `${p.ty}px`,
              '--tz': `${p.tz}px`,
              '--rx': `${p.rx}deg`,
              '--ry': `${p.ry}deg`,
              '--rz': `${p.rz}deg`,
              '--ctx': `${p.ctx}px`,
              '--cty': `${p.cty}px`,
              '--ctz': `${p.ctz}px`,
              '--crx': `${p.crx}deg`,
              '--cry': `${p.cry}deg`,
              '--crz': `${p.crz}deg`,
              '--delay': `${p.delay}s`,
              '--cdelay': `${p.cDelay}s`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${100 / 10}%`, // 10 is gridSize
              height: `${100 / 10}%`,
              backgroundImage: `url("${logoImage}")`,
              backgroundPosition: `${p.bgX}% ${p.bgY}%`,
              backgroundSize: `1000% 1000%` // gridSize * 100
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
