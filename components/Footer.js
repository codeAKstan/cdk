import { FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="py-12 border-t-2 border-dashed border-[#2c2c2c]/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="size-4 bg-[#ff8a65] rounded-sm transform rotate-12"></div>
              <span className="font-sketch font-bold text-[#2c2c2c] uppercase tracking-tighter">codeAKstan</span>
            </div>
            <p className="font-note text-sm text-[#666]">© {new Date().getFullYear()} Digital Architect Core. All Rights Reserved.</p>
          </div>

          <div className="hidden md:block font-note text-lg text-[#666] italic text-center max-w-md">
            "Design is not just what it looks like and feels like. Design is how it works."
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4 text-[#666]">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8a65] transition-colors duration-300" aria-label="Twitter">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8a65] transition-colors duration-300" aria-label="LinkedIn">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
            <div className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">
              System Status: <span className="underline decoration-dotted">Optimized</span>
            </div>
          </div>
        </div>
      </footer>
    )
  }
