'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SketchedBorder({ children, className = "", trigger = null, delay = 0 }) {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [path1Ref, path2Ref].forEach((ref, index) => {
        if (!ref.current) return;
        const path = ref.current;
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length
        });

        const animTrigger = trigger || containerRef.current;

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5 + (index * 0.2),
          delay: delay + (index * 0.1),
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: animTrigger,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP animations and ScrollTriggers
  }, [trigger, delay]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          ref={path1Ref}
          d="M 2,2 L 98,1.5 L 98.5,98 L 1.5,98.5 Z"
          fill="none"
          stroke="#2c2c2c"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="opacity-20"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={path2Ref}
          d="M 1.5,2.5 L 98.5,2 L 97.5,98.5 L 2.5,97.5 Z"
          fill="none"
          stroke="#2c2c2c"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          className="opacity-10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
