'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SketchedBorder from './SketchedBorder';

export default function Stats() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            }
        });

        tl.from(".stat-item", {
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        })
        .from(".stat-underline", {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.inOut"
        }, "-=0.6");

    }, { scope: containerRef });

    return (
      <section ref={containerRef} id="stats" className="story-wrapper min-h-screen flex items-center justify-center py-20 border-y-2 border-dashed border-[#2c2c2c]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
          {[
            { label: "Years Experience", value: "05+" },
            { label: "Repositories", value: "110+" },
            { label: "Avg Latency", value: "24ms" },
            { label: "System Uptime", value: "99.9%" }
          ].map((stat, idx) => (
            <SketchedBorder key={idx} className="stat-item p-6 group" delay={idx * 0.1}>
              <div className="flex flex-col items-center md:items-start">
                <span className="font-sketch text-5xl md:text-6xl text-[#2c2c2c] group-hover:text-[#ff8a65] transition-colors">
                  {stat.value}
                </span>
                <span className="font-note text-lg text-[#666] mt-2">
                  {stat.label}
                </span>
                {/* Decorative underline */}
                <div className="stat-underline w-16 h-1 bg-[#2c2c2c]/5 mt-1 rounded-full group-hover:bg-[#ff8a65]/20 transition-all"></div>
              </div>
            </SketchedBorder>
          ))}
        </div>
      </section>
    )
  }
