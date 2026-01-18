export default function Stats() {
    return (
      <section className="py-12 border-y border-white/5 bg-surface-dark/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <span className="text-primary mono-text text-3xl font-bold tracking-tighter">05+</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Years Experience</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary mono-text text-3xl font-bold tracking-tighter">110+</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Repositories</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary mono-text text-3xl font-bold tracking-tighter">24ms</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">Avg Latency Achieved</span>
          </div>
          <div className="flex flex-col">
            <span className="text-primary mono-text text-3xl font-bold tracking-tighter">99.9%</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mt-1">System Uptime</span>
          </div>
        </div>
      </section>
    )
  }
