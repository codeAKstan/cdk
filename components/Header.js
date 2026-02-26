"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [resumeUrl, setResumeUrl] = useState(null)

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

  const handleResumeClick = (e) => {
    if (resumeUrl) {
        window.open(resumeUrl, '_blank');
    } else {
        // Fallback to section if no URL
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ]

  return (
    <header className="fixed w-full z-50 py-6 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/80 backdrop-blur-sm border-2 border-[#2c2c2c] p-4 rounded-lg shadow-[8px_8px_0px_0px_rgba(44,44,44,1)]">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-[#2c2c2c] text-white p-1 rounded transform rotate-3 group-hover:rotate-0 transition-transform">
             <span className="material-symbols-outlined">edit</span>
          </div>
          <span className="text-2xl font-sketch text-[#2c2c2c]">codeAKstan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
                key={link.name}
                href={link.path}
                className="font-sketch text-lg text-[#2c2c2c] hover:text-[#ff8a65] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff8a65] transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <button
            onClick={handleResumeClick}
            className="px-6 py-2 bg-[#ff8a65]/10 border-2 border-[#ff8a65] text-[#ff8a65] font-sketch text-lg hover:bg-[#ff8a65] hover:text-white transition-all transform hover:-translate-y-1"
          >
            RESUME
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#2c2c2c]" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white border-2 border-[#2c2c2c] p-6 rounded-lg shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="font-sketch text-xl text-[#2c2c2c]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button 
                onClick={() => { setIsOpen(false); handleResumeClick(); }}
                className="font-sketch text-xl text-left text-[#ff8a65] pt-4 border-t border-dashed border-[#2c2c2c]/10"
            >
                RESUME
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
