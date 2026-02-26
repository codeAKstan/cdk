'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
    const [profile, setProfile] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        fetch('/api/profile')
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => console.error(err));
    }, []);

    const name = profile?.name || "Alex Rivers";
    const headline = profile?.headline || "Creative Developer & Digital Architect.";
    const bio = profile?.bio || "I build things with code, coffee, and a very messy sketchbook.";

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            }
        });

        tl.from(".hero-name", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" })
          .from(".hero-headline", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .from(".hero-bio", { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .from(".hero-fig", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out" }, "-=0.4")
          .from(".hero-svg-path", { strokeDasharray: 1000, strokeDashoffset: 1000, duration: 1.5, ease: "power1.inOut" }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="hero" className="story-wrapper relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Resume Button */}
            <div className="absolute top-24 right-8 z-20">
                <button
                    onClick={() => profile?.resumeUrl && window.open(profile.resumeUrl, '_blank')}
                    className="group relative px-6 py-2 bg-white border-2 border-[#2c2c2c] shadow-[4px_4px_0px_0px_rgba(44,44,44,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                    <span className="font-sketch text-lg flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">download</span>
                        Resume
                    </span>
                </button>
            </div>

            <div className="text-center max-w-4xl z-10">
                <div className="hero-name">
                    <h1 className="text-7xl md:text-9xl font-sketch mb-4 relative inline-block text-[#2c2c2c]">
                        {name}
                        <div className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-[#ff8a65] opacity-60 rounded-full -rotate-1 skew-x-12"></div>
                    </h1>
                </div>

                <div className="hero-headline mt-12">
                    <p className="text-2xl md:text-3xl font-hand text-[#4a4a4a] leading-tight">
                        {headline}
                    </p>
                </div>
                <div className="hero-bio mt-4">
                    <p className="text-xl md:text-2xl font-note text-[#666] max-w-2xl mx-auto leading-relaxed">
                        {bio}
                    </p>
                </div>
            </div>

            {/* Fig 01 Box */}
            <div className="hero-fig mt-20 relative z-10">
                <div className="absolute -top-3 left-4 bg-[#f4f4f2] px-2 font-note text-sm border border-[#2c2c2c] z-10">
                    Fig. 01 Core Architecture
                </div>
                <div className="w-56 h-56 md:w-64 md:h-64 border-2 border-dashed border-[#2c2c2c] flex items-center justify-center rounded-lg p-8 relative">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#2c2c2c] fill-none stroke-[1.5]">
                        {/* Compass handle */}
                        <circle className="hero-svg-path" cx="50" cy="15" r="4" fill="none" stroke="#2c2c2c" />
                        <line className="hero-svg-path" x1="50" y1="19" x2="50" y2="25" />

                        {/* Compass legs */}
                        <path className="hero-svg-path" d="M50 25 L35 85" />
                        <path className="hero-svg-path" d="M50 25 L65 85" />

                        {/* Compass joints/details */}
                        <circle className="hero-svg-path" cx="50" cy="25" r="2" fill="#2c2c2c" />
                        <line className="hero-svg-path" x1="42" y1="55" x2="58" y2="55" strokeDasharray="2 2" />

                        {/* Guide lines */}
                        <path className="hero-svg-path" d="M50 10 L50 90 M10 50 L90 50" strokeDasharray="4 4" opacity="0.1" />
                    </svg>

                    {/* Sketchy horizontal lines extending from sides */}
                    <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-[#cbd5e1]"></div>
                    <div className="absolute -right-12 top-1/2 w-12 h-[1px] bg-[#cbd5e1]"></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-50 z-10">
                <span className="font-note text-base">Scroll to flip page</span>
                <span className="material-symbols-outlined animate-bounce">
                    keyboard_arrow_down
                </span>
            </div>
        </section>
    );
}
