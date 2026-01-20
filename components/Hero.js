export default function Hero() {
    return (
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-4xl w-full text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary/30 bg-primary/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mono-text">Available for select projects</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-white">
            DIGITAL<br />
            <span className="text-primary italic">ARCHITECT</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            Engineering high-performance backends and clinical frontends. I translate complex business logic into <span className="text-white font-mono">scalable architecture</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-background-dark px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,209,205,0.3)] flex items-center justify-center gap-2">
              <span>Initialize Projects</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <a href="https://github.com/codeakstan" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-primary/50 text-white px-8 py-4 rounded font-bold text-sm uppercase tracking-widest transition-all bg-white/5 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">code</span>
              <span>Github Core</span>
            </a>
          </div>
        </div>
      </section>
    )
  }
