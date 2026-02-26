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

          <div className="font-note text-lg text-[#666] italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </div>

          <div className="font-note text-sm text-[#ff8a65] font-bold uppercase tracking-widest">
            System Status: <span className="underline decoration-dotted">Optimized</span>
          </div>
        </div>
      </footer>
    )
  }
