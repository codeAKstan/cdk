"use client";

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
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark font-bold">terminal</span>
            </div>
            <h2 className="text-xl font-bold tracking-tighter mono-text uppercase">codeAKstan</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-medium hover:text-primary transition-colors mono-text tracking-tight" href="#projects">01. PROJECTS</a>
            <a className="text-sm font-medium hover:text-primary transition-colors mono-text tracking-tight" href="#skills">02. SKILLS</a>
            <a className="text-sm font-medium hover:text-primary transition-colors mono-text tracking-tight" href="#about">03. ABOUT</a>
            <a className="text-sm font-medium hover:text-primary transition-colors mono-text tracking-tight" href="#contact">04. CONTACT</a>
            <button 
                onClick={handleResumeClick}
                className="bg-primary text-background-dark px-5 py-2 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Resume
            </button>
          </nav>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>
    )
  }

