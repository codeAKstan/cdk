'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch('/api/profile')
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => console.error(err));
    }, []);

    const name = profile?.name || "Obum neme";
    const headline = profile?.headline || "Creative Developer & Digital Architect.";
    const bio = profile?.bio || "I build things with code, coffee, and a very messy sketchbook.";

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            {/* Resume Button */}
            <div className="absolute top-8 right-8 z-20">
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-7xl md:text-9xl font-sketch mb-4 relative inline-block text-[#2c2c2c]">
                        {name}
                        <div className="absolute -bottom-2 left-0 w-full h-2 md:h-3 bg-[#ff8a65] opacity-60 rounded-full -rotate-1 skew-x-12"></div>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12 space-y-4"
                >
                    <p className="text-2xl md:text-3xl font-hand text-[#4a4a4a] leading-tight">
                        {headline}
                    </p>
                    <p className="text-xl md:text-2xl font-note text-[#666] max-w-2xl mx-auto leading-relaxed">
                        {bio}
                    </p>
                </motion.div>
            </div>

            {/* Fig 01 Box */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-20 relative z-10"
            >
                <div className="absolute -top-3 left-4 bg-[#f4f4f2] px-2 font-note text-sm border border-[#2c2c2c] z-10">
                    Fig. 01 Core Architecture
                </div>
                <div className="w-56 h-56 md:w-64 md:h-64 border-2 border-dashed border-[#2c2c2c] flex items-center justify-center rounded-lg p-8 relative">
                    <svg viewBox="0 0 100 100" className="w-32 h-32 stroke-[#2c2c2c] fill-none stroke-[1.5]">
                        {/* Interface Box (Top) */}
                        <rect x="30" y="10" width="40" height="15" rx="2" />
                        <line x1="40" y1="17" x2="60" y2="17" opacity="0.3" />
                        <line x1="40" y1="20" x2="50" y2="20" opacity="0.3" />

                        {/* Logic Box (Middle) */}
                        <rect x="15" y="35" width="70" height="30" rx="2" />
                        <line x1="25" y1="45" x2="75" y2="45" opacity="0.2" />
                        <line x1="25" y1="50" x2="65" y2="50" opacity="0.2" />
                        <line x1="25" y1="55" x2="70" y2="55" opacity="0.2" />
                        
                        {/* Data Box (Bottom) */}
                        <rect x="35" y="75" width="30" height="15" rx="2" />
                        <circle cx="50" cy="82.5" r="3" opacity="0.3" />

                        {/* Connection Lines */}
                        <path d="M50 25 L50 35" strokeDasharray="2 2" />
                        <path d="M50 65 L50 75" strokeDasharray="2 2" />
                        
                        {/* Abstract Guide Lines */}
                        <path d="M5 50 L15 50 M85 50 L95 50" opacity="0.1" />
                        <path d="M50 5 L50 10 M50 90 L50 95" opacity="0.1" />
                    </svg>

                    {/* Sketchy horizontal lines extending from sides */}
                    <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-[#cbd5e1]"></div>
                    <div className="absolute -right-12 top-1/2 w-12 h-[1px] bg-[#cbd5e1]"></div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-50 z-10">
                <span className="font-note text-base">Scroll to flip page</span>
                <motion.span
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="material-symbols-outlined"
                >
                    keyboard_arrow_down
                </motion.span>
            </div>
        </section>
    );
}
