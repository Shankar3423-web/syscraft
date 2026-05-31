import React, { useEffect, useRef, useCallback } from 'react';

/* ═══════════════════════════════════════════════════════════════
   PRODUCT JOURNEY — Futuristic Circular Ecosystem Animation
   Canvas-based animated visualization of the full dev lifecycle
   ═══════════════════════════════════════════════════════════════ */

const STAGES = [
  { label: 'Idea',       icon: '💡', color: '#fbbf24', angle: -Math.PI / 2 },
  { label: 'UI/UX',      icon: '🎨', color: '#a855f7', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 1 },
  { label: 'Frontend',   icon: '🖥️', color: '#22d3ee', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 2 },
  { label: 'Backend',    icon: '⚙️', color: '#818cf8', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 3 },
  { label: 'Database',   icon: '🗄️', color: '#4ade80', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 4 },
  { label: 'Cloud',      icon: '☁️', color: '#38bdf8', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 5 },
  { label: 'AI',         icon: '🧠', color: '#f43f5e', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 6 },
  { label: 'Automation', icon: '⚡', color: '#fb923c', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 7 },
  { label: 'Launch',     icon: '🚀', color: '#ec4899', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 8 },
  { label: 'Scale',      icon: '📈', color: '#6366f1', angle: -Math.PI / 2 + (2 * Math.PI / 10) * 9 },
];

// Duration per stage light-up (seconds)
const STAGE_DURATION = 0.55;
// Pause after all lit before reset
const PAUSE_DURATION = 2.0;
// Time for the "connected" spin phase
const CONNECTED_DURATION = 3.0;
const TOTAL_CYCLE = STAGES.length * STAGE_DURATION + PAUSE_DURATION + CONNECTED_DURATION;

export default function ProductJourney() {
  const canvasRef = useRef(null);
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2) : 1;

  const draw = useCallback((ctx, w, h, time) => {
    ctx.clearRect(0, 0, w, h);

    // Center it perfectly
    const cx = w * 0.5; 
    const cy = h * 0.45; 
    
    // Scale down the orbit radius slightly to prevent overlapping the tagline
    const radius = Math.min(w, h) * 0.22;
    const nodeRadius = Math.min(w, h) * 0.042;

    // Cycle time
    const cycleTime = time % TOTAL_CYCLE;
    const lightUpEnd = STAGES.length * STAGE_DURATION;
    const allLit = cycleTime >= lightUpEnd;
    const inConnected = cycleTime >= lightUpEnd + PAUSE_DURATION;

    // Determine how many stages are lit
    let litCount = allLit ? STAGES.length : Math.floor(cycleTime / STAGE_DURATION);
    // Current stage progress (0-1) for the stage being lit
    const currentStageProgress = allLit ? 1 : (cycleTime % STAGE_DURATION) / STAGE_DURATION;

    // Slow orbit rotation when all connected
    const orbitRotation = inConnected
      ? ((cycleTime - lightUpEnd - PAUSE_DURATION) / CONNECTED_DURATION) * Math.PI * 0.3
      : 0;

    // ── Background particles ──
    drawParticles(ctx, cx, cy, radius, time, w, h);

    // ── Orbit ring ──
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    const ringGrad = ctx.createRadialGradient(cx, cy, radius - 2, cx, cy, radius + 2);
    ringGrad.addColorStop(0, allLit ? 'rgba(99,102,241,0.45)' : 'rgba(99,102,241,0.15)');
    ringGrad.addColorStop(1, 'transparent');
    ctx.strokeStyle = ringGrad;
    ctx.lineWidth = allLit ? 3 : 1.5;
    ctx.stroke();

    // Secondary orbit ring
    if (allLit) {
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168,85,247,0.2)';
      ctx.lineWidth = 6;
      ctx.stroke();
    }
    ctx.restore();

    // ── Energy connections between lit stages ──
    for (let i = 0; i < litCount; i++) {
      const next = (i + 1) % STAGES.length;
      if (next >= litCount && !allLit) continue;

      const s1 = STAGES[i];
      const s2 = STAGES[next];
      const a1 = s1.angle + orbitRotation;
      const a2 = s2.angle + orbitRotation;

      const x1 = cx + Math.cos(a1) * radius;
      const y1 = cy + Math.sin(a1) * radius;
      const x2 = cx + Math.cos(a2) * radius;
      const y2 = cy + Math.sin(a2) * radius;

      // Energy flow line
      ctx.save();
      const lineGrad = ctx.createLinearGradient(x1, y1, x2, y2);
      lineGrad.addColorStop(0, s1.color);
      lineGrad.addColorStop(1, s2.color);
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 3; // Thicker lines
      ctx.setLineDash([8, 12]);
      ctx.lineDashOffset = -time * 60; // Faster flow
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();

      // Travelling energy particle
      if (allLit || (i < litCount - 1)) {
        const particleT = (time * 1.2 + i * 0.3) % 1; // Faster particles
        const px = x1 + (x2 - x1) * particleT;
        const py = y1 + (y2 - y1) * particleT;

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2); // Slightly larger
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = s1.color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.restore();
      }
    }

    // ── Connection lines to center (when all lit) ──
    if (allLit) {
      const centerAlpha = inConnected ? 0.5 : Math.min((cycleTime - lightUpEnd) / PAUSE_DURATION, 0.5);
      STAGES.forEach((stage, i) => {
        const a = stage.angle + orbitRotation;
        const x = cx + Math.cos(a) * radius;
        const y = cy + Math.sin(a) * radius;

        ctx.save();
        const radGrad = ctx.createLinearGradient(cx, cy, x, y);
        radGrad.addColorStop(0, stage.color + '00');
        radGrad.addColorStop(0.3, stage.color + Math.round(centerAlpha * 120).toString(16).padStart(2, '0'));
        radGrad.addColorStop(1, stage.color + '00');
        ctx.strokeStyle = radGrad;
        ctx.lineWidth = 2; // Thicker radial connections
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.restore();
      });
    }

    // ── Central glowing sphere ──
    drawCentralSphere(ctx, cx, cy, radius * 0.24, time, allLit, inConnected); // Slightly larger core

    // ── Stage nodes ──
    STAGES.forEach((stage, i) => {
      const a = stage.angle + orbitRotation;
      const x = cx + Math.cos(a) * radius;
      const y = cy + Math.sin(a) * radius;

      const isLit = i < litCount;
      const isLighting = i === litCount; // Currently being lit
      let alpha = isLit ? 1 : (isLighting ? currentStageProgress : 0.2);
      const scale = isLit ? 1 : (isLighting ? 0.7 + currentStageProgress * 0.3 : 0.7);

      // Launch special glow
      const isLaunch = stage.label === 'Launch' && isLit && allLit;

      drawNode(ctx, x, y, nodeRadius * scale, stage, alpha, time, isLaunch);
    });

    // ── Tagline at bottom ──
    drawTagline(ctx, cx, cy, radius, h);
  }, []);

  const drawParticles = useCallback((ctx, cx, cy, radius, time, w, h) => {
    const particleCount = 55;
    ctx.save();
    for (let i = 0; i < particleCount; i++) {
      const seed = i * 137.508;
      const px = (Math.sin(seed + time * 0.2) * 0.5 + 0.5) * w;
      const py = (Math.cos(seed * 0.7 + time * 0.15) * 0.5 + 0.5) * h;
      const size = 2.0 + Math.sin(time * 2 + seed) * 1.5;
      const alpha = 0.4 + Math.sin(time * 1.5 + seed) * 0.25;

      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99,102,241,${alpha})`;
      ctx.shadowColor = 'rgba(99,102,241,0.8)';
      ctx.shadowBlur = 8;
      ctx.fill();
    }
    ctx.restore();
  }, []);

  const drawCentralSphere = useCallback((ctx, cx, cy, r, time, allLit, inConnected) => {
    ctx.save();

    // Outer glow
    const glowR = r * (allLit ? 3.0 : 2.4);
    const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, glowR);
    if (allLit) {
      outerGlow.addColorStop(0, 'rgba(99,102,241,0.4)');
      outerGlow.addColorStop(0.3, 'rgba(168,85,247,0.25)');
      outerGlow.addColorStop(0.6, 'rgba(34,211,238,0.15)');
      outerGlow.addColorStop(1, 'transparent');
    } else {
      outerGlow.addColorStop(0, 'rgba(99,102,241,0.25)');
      outerGlow.addColorStop(0.5, 'rgba(168,85,247,0.1)');
      outerGlow.addColorStop(1, 'transparent');
    }
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    // Pulsing ring
    const pulseScale = 1 + Math.sin(time * 2) * 0.18;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.45 * pulseScale, 0, Math.PI * 2);
    ctx.strokeStyle = allLit ? 'rgba(99,102,241,0.5)' : 'rgba(99,102,241,0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Second pulsing ring
    const pulseScale2 = 1 + Math.sin(time * 2 + Math.PI) * 0.15;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.75 * pulseScale2, 0, Math.PI * 2);
    ctx.strokeStyle = allLit ? 'rgba(168,85,247,0.35)' : 'rgba(168,85,247,0.1)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Core sphere gradient
    const sphereGrad = ctx.createRadialGradient(
      cx - r * 0.3, cy - r * 0.3, 0,
      cx, cy, r
    );
    if (inConnected) {
      sphereGrad.addColorStop(0, '#c084fc');
      sphereGrad.addColorStop(0.4, '#818cf8');
      sphereGrad.addColorStop(0.8, '#6366f1');
      sphereGrad.addColorStop(1, '#4338ca');
    } else if (allLit) {
      sphereGrad.addColorStop(0, '#a78bfa');
      sphereGrad.addColorStop(0.5, '#7c3aed');
      sphereGrad.addColorStop(1, '#4c1d95');
    } else {
      sphereGrad.addColorStop(0, '#4338ca');
      sphereGrad.addColorStop(0.6, '#312e81');
      sphereGrad.addColorStop(1, '#1e1b4b');
    }

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = sphereGrad;
    ctx.shadowColor = allLit ? '#6366f1' : '#4338ca';
    ctx.shadowBlur = allLit ? 50 : 25;
    ctx.fill();

    // Highlight shine on sphere
    const shineGrad = ctx.createRadialGradient(
      cx - r * 0.35, cy - r * 0.35, 0,
      cx - r * 0.35, cy - r * 0.35, r * 0.7
    );
    shineGrad.addColorStop(0, 'rgba(255,255,255,0.55)');
    shineGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = shineGrad;
    ctx.shadowBlur = 0;
    ctx.fill();

    // Inner rotating arc (energy)
    ctx.beginPath();
    const arcStart = time * 2;
    ctx.arc(cx, cy, r * 0.65, arcStart, arcStart + Math.PI * 0.8);
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Second arc
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.65, arcStart + Math.PI, arcStart + Math.PI * 1.5);
    ctx.strokeStyle = 'rgba(34,211,238,0.45)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // "Product Core" text
    ctx.font = `bold ${r * 0.28}px 'Outfit', 'Inter', sans-serif`;
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = '#818cf8';
    ctx.shadowBlur = 15;
    ctx.fillText('Product', cx, cy - r * 0.12);
    ctx.fillText('Core', cx, cy + r * 0.22);
    ctx.shadowBlur = 0;

    ctx.restore();
  }, []);

  const drawNode = useCallback((ctx, x, y, r, stage, alpha, time, isLaunch) => {
    ctx.save();
    ctx.globalAlpha = Math.max(alpha, 0.2);

    // Node glow
    if (alpha > 0.5) {
      const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, r * 3);
      glowGrad.addColorStop(0, stage.color + '55');
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(x, y, r * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Dynamic tech ring around active nodes
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(time * 1.5);
      ctx.beginPath();
      ctx.arc(0, 0, r * 1.15, 0, Math.PI * 1.5);
      ctx.strokeStyle = stage.color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.7;
      ctx.stroke();
      ctx.restore();
    }

    // Launch huge glow
    if (isLaunch) {
      const launchPulse = 1 + Math.sin(time * 4) * 0.35;
      const launchGlow = ctx.createRadialGradient(x, y, 0, x, y, r * 4.5 * launchPulse);
      launchGlow.addColorStop(0, stage.color + '60');
      launchGlow.addColorStop(0.5, stage.color + '20');
      launchGlow.addColorStop(1, 'transparent');
      ctx.globalAlpha = 1;
      ctx.fillStyle = launchGlow;
      ctx.beginPath();
      ctx.arc(x, y, r * 4.5 * launchPulse, 0, Math.PI * 2);
      ctx.fill();
    }

    // Node background
    ctx.globalAlpha = Math.max(alpha, 0.2);
    const nodeBg = ctx.createRadialGradient(x - r * 0.2, y - r * 0.2, 0, x, y, r);
    if (alpha > 0.5) {
      nodeBg.addColorStop(0, stage.color + 'e0'); // More opaque
      nodeBg.addColorStop(1, stage.color + 'a0');
    } else {
      nodeBg.addColorStop(0, 'rgba(15,18,35,0.9)');
      nodeBg.addColorStop(1, 'rgba(10,12,24,0.95)');
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = nodeBg;
    ctx.shadowColor = alpha > 0.5 ? stage.color : 'transparent';
    ctx.shadowBlur = alpha > 0.5 ? 25 : 0;
    ctx.fill();

    // Node border
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = alpha > 0.5 ? '#ffffff' : 'rgba(99,102,241,0.2)'; // Brighter border when active
    ctx.lineWidth = alpha > 0.5 ? 2.5 : 1;
    ctx.shadowBlur = alpha > 0.5 ? 10 : 0;
    ctx.stroke();
    ctx.shadowBlur = 0; // reset

    // Highlight
    if (alpha > 0.5) {
      const shGrad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
      shGrad.addColorStop(0, 'rgba(255,255,255,0.5)');
      shGrad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = shGrad;
      ctx.fill();
    }

    // Icon with pulsing and brighter glow
    ctx.globalAlpha = Math.max(alpha, 0.4);
    ctx.shadowColor = alpha > 0.5 ? '#ffffff' : 'transparent';
    ctx.shadowBlur = alpha > 0.5 ? 15 : 0;
    ctx.font = `${r * 0.9}px serif`; // Increased icon size
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add a subtle pulsing effect to the icon itself when active
    const iconPulse = alpha > 0.5 ? 1 + Math.sin(time * 5) * 0.08 : 1;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(iconPulse, iconPulse);
    ctx.fillText(stage.icon, 0, 0);
    ctx.restore();
    ctx.shadowBlur = 0;

    // Label
    ctx.globalAlpha = Math.max(alpha, 0.3);
    ctx.font = `600 ${r * 0.5}px 'Inter', sans-serif`; // Slightly larger text
    ctx.fillStyle = alpha > 0.5 ? '#ffffff' : 'rgba(148,163,184,0.6)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.shadowColor = alpha > 0.5 ? 'rgba(0,0,0,0.8)' : 'transparent';
    ctx.shadowBlur = alpha > 0.5 ? 6 : 0;
    ctx.fillText(stage.label, x, y + r + 8);

    ctx.restore();
  }, []);

  const drawTagline = useCallback((ctx, cx, cy, radius, h) => {
    ctx.save();
    ctx.globalAlpha = 0.95;
    ctx.font = `500 14px 'Inter', sans-serif`;
    ctx.fillStyle = 'rgba(148,163,184,1)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const textY = cy + radius + 60; // Fixed offset from orbit so it doesn't get pushed off canvas
    ctx.fillText('From Concept to Scale — We Build Complete Digital Products', cx, textY);
    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      // We don't overwrite canvas.style.width/height here since it's controlled by React styles below
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();
    window.addEventListener('resize', setSize);

    const startTime = performance.now() / 1000;

    const loop = () => {
      const time = performance.now() / 1000 - startTime;
      const rect = canvas.getBoundingClientRect();
      draw(ctx, rect.width, rect.height, time);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', setSize);
    };
  }, [draw, dpr]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: '-15%',
        left: '-5%',      // Shift canvas slightly to the right
        width: '130%',    // Extend out to avoid clipping
        height: '130%',   // Extend up and down so huge glows don't clip
        pointerEvents: 'none',
        zIndex: 10,
      }}
    />
  );
}
