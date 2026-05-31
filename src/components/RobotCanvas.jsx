import React, { useEffect, useRef } from 'react';

export default function RobotCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Resize handler
    const setSize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    // Orbiting Cards
    const cards = [
      { text: 'Frontend', color: '#22d3ee', angle: 0 },
      { text: 'Backend', color: '#a855f7', angle: 1.2 },
      { text: 'Database', color: '#4ade80', angle: 2.4 },
      { text: 'Automation', color: '#fb923c', angle: 3.6 },
      { text: 'AI / ML', color: '#f43f5e', angle: 4.8 },
    ];

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      time += 0.005;

      // Draw Orbit Path
      ctx.beginPath();
      ctx.ellipse(cx, cy, 280, 80, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw Cards
      cards.forEach((card) => {
        const currentAngle = card.angle + time;
        const x = cx + Math.cos(currentAngle) * 280;
        const z = Math.sin(currentAngle); // -1 to 1
        const y = cy + z * 80;

        // Scale based on Z depth
        const scale = 0.6 + ((z + 1) / 2) * 0.8;
        const opacity = 0.3 + ((z + 1) / 2) * 0.7;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);
        
        // Draw Card Background
        ctx.fillStyle = `rgba(10, 12, 24, ${opacity * 0.9})`;
        ctx.strokeStyle = card.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(-60, -20, 120, 40, 8);
        ctx.fill();
        ctx.globalAlpha = opacity;
        ctx.stroke();

        // Draw Glow
        ctx.shadowColor = card.color;
        ctx.shadowBlur = 15;
        ctx.stroke();

        // Draw Text
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 0;
        ctx.font = 'bold 14px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(card.text, 0, 0);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}
