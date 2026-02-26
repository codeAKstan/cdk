'use client';

import { useEffect, useRef } from 'react';

export default function SketchTrail() {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e) => {
      points.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 30, // frames to live
      });

      if (points.current.length > 100) {
        points.current.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.current.length > 1) {
        for (let i = 1; i < points.current.length; i++) {
          const p1 = points.current[i - 1];
          const p2 = points.current[i];

          const opacity = p2.life / 30;
          ctx.strokeStyle = `rgba(44, 44, 44, ${opacity * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.lineJoin = 'round';
          ctx.lineCap = 'round';

          // Draw main line with jitter
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          const jitterX = (Math.random() - 0.5) * 1.5;
          const jitterY = (Math.random() - 0.5) * 1.5;
          ctx.lineTo(p2.x + jitterX, p2.y + jitterY);
          ctx.stroke();

          // Draw a second lighter line for sketchy feel
          if (Math.random() > 0.5) {
            ctx.strokeStyle = `rgba(44, 44, 44, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(p1.x + (Math.random() - 0.5) * 3, p1.y + (Math.random() - 0.5) * 3);
            ctx.lineTo(p2.x + (Math.random() - 0.5) * 3, p2.y + (Math.random() - 0.5) * 3);
            ctx.stroke();
          }
        }
      }

      // Update life
      points.current.forEach(p => p.life--);
      points.current = points.current.filter(p => p.life > 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
