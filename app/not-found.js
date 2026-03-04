'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f4f4f2] flex flex-col items-center justify-center p-6 text-[#2c2c2c] overflow-hidden relative">
      {/* Background Grid - consistent with landing page */}
      <div className="absolute inset-0 sketch-bg opacity-40 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-xl"
      >
        <div className="relative inline-block mb-8">
          <h1 className="text-9xl md:text-[12rem] font-sketch leading-none select-none opacity-10">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, -2, 2, -1, 0],
                x: [0, -1, 1, 0]
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48 stroke-[#2c2c2c] fill-none stroke-[1.5]">
                {/* Torn Paper / Missing Blueprint concept */}
                <path d="M20 20 L80 20 L80 80 L20 80 Z" strokeDasharray="4 4" opacity="0.3" />
                <path d="M25 25 L75 25 L75 50 Q 60 45 45 55 L25 55 Z" className="fill-[#ff8a65]/10" />
                <path d="M45 55 L75 55 L75 75 L25 75 L25 55" strokeDasharray="2 2" />
                
                {/* Large X through the drawing */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  d="M30 30 L70 70" 
                  stroke="#ff8a65" 
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.3, duration: 1 }}
                  d="M70 30 L30 70" 
                  stroke="#ff8a65" 
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-sketch mb-4">
          Blueprint Missing
        </h2>
        
        <p className="font-note text-xl md:text-2xl text-[#666] mb-12 leading-relaxed">
          It seems the coordinates for this page were lost in the drafting process. 
          The structure you're looking for doesn't exist yet.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/"
            className="group relative px-8 py-3 bg-white border-2 border-[#2c2c2c] shadow-[6px_6px_0px_0px_rgba(44,44,44,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <span className="font-sketch text-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-base">home</span>
              Return to Site
            </span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="font-note text-lg border-b-2 border-dashed border-[#2c2c2c]/30 hover:border-[#ff8a65] transition-colors"
          >
            Go back to previous draft
          </button>
        </div>
      </motion.div>

      {/* Decorative sketchy elements */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none hidden md:block">
        <span className="font-note text-sm">ERR_FILE_NOT_FOUND</span>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 pointer-events-none hidden md:block text-right">
        <span className="font-note text-sm uppercase tracking-widest">Architectural Registry // v2.0</span>
      </div>
    </div>
  );
}
