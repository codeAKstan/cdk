"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [resumeUrl, setResumeUrl] = useState(null);

    useEffect(() => {
        const fetchResume = async () => {
            try {
                const res = await fetch('/api/profile');
                const data = await res.json();
                if (data && data.resumeUrl) {
                    setResumeUrl(data.resumeUrl);
                }
            } catch (error) {
                console.error("Failed to fetch resume", error);
            }
        };

        fetchResume();
    }, []);

    const handleResumeClick = () => {
        if (resumeUrl) {
            window.open(resumeUrl, '_blank');
        } else {
            alert("Resume is not available yet.");
        }
    };

    return (
      <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-slate-900/10 bg-[#f4f1ea]/90 backdrop-blur-sm font-['Architects_Daughter']">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="size-8 bg-slate-900 rounded-sm flex items-center justify-center rotate-3">
              <span className="material-symbols-outlined text-[#f4f1ea] font-bold text-sm">edit</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-800">codeAKstan</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="#projects">PROJECTS</a>
            <a className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="#skills">SKILLS</a>
            <a className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="#about">ABOUT</a>
            <a className="text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors" href="#contact">CONTACT</a>
            <button 
                onClick={handleResumeClick}
                className="bg-blue-600/10 border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-sm font-bold text-xs uppercase hover:bg-blue-600 hover:text-white transition-all transform hover:-rotate-2"
            >
              RESUME
            </button>
          </nav>
          <button className="md:hidden text-slate-800">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
    )
  }

