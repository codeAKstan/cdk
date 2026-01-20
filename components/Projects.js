export default function Projects() {
    return (
      <section className="py-32 bg-surface-dark/20 border-y border-white/5 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="mono-text text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Deployment Log</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">SELECTED WORKS</h2>
            </div>
            <a className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-slate-500 hover:text-primary transition-colors" href="/projects">
              <span>Archive.git</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-primary/50 transition-all">
              <div className="h-48 bg-black/40 relative overflow-hidden">
                <img alt="Code interface of a data analytics platform" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjFhx-ThNVIol3emTCRis8VfkJYrc4-IBCzEiXTNLy6Y1aTV1HcLJB1G3JLjbAQ_YMyIROuK-Akr4ssmVXdg0QzBHo99lD9vqBYea507mMLBy6f-w6jd0pnGPD0gEHVAOUwBwSmtQEt-fBtRQijMRGpsRf4EQORGQKex7a5Bd9zSJJhpnescNw-45v6ZDZG1Q_KDmBqNwfAIehUHv3IHqQ5h6-oUGfkqy0K7ZrO9Rixi6YycNPJTweYoYcxIYy34fAv9IETwHsFRk" />
                <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded uppercase">01 / Production</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">NEURAL-VIS ARCHITECT</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  High-performance data visualization engine for real-time neural network monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">Rust</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">WebGL</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">Next.js</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href="#">link</a>
                  <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href="#">terminal</a>
                </div>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-primary/50 transition-all">
              <div className="h-48 bg-black/40 relative overflow-hidden">
                <img alt="Abstract digital network visualization" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE1Djic536sCMrLL1y40AiPzaNkpuJxnc9Z7z-W2pzMOj9Cvvge-UulqHwpsQw1l3Yxe7Q8MR1k4_mgt3MAKAYOTvoLPhAaxd0kK1IPC2LlFyNA3nGgMxJ5A89_8BT4Ts41wx1canokx6vEuZXwfCNQq6QlBeKkfzYw8VCHFEGmGQtGRrCT3lxykjV6M0ehogqefOoR1B_tkrPYXMDXvA4Gnywgvg3BYFLRfjl9it994zJ1GJiXSFGv68_PHPucz7IfxHYp60rq2E" />
                <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded uppercase">02 / Beta</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">QUANTUM-LEDGER</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  Distributed ledger system with post-quantum encryption standards for financial microservices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">GoLang</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">gRPC</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">Docker</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href="#">link</a>
                  <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href="#">terminal</a>
                </div>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-primary/50 transition-all">
              <div className="h-48 bg-black/40 relative overflow-hidden">
                <img alt="Planet earth with digital connection overlays" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDl3bnb-oYPRuuAKV6-BtfxLLRFepGNhr0l9HLwuDRLhUrr5cTybSN7yF0qxLBNyZQ6I0PYH1mt3ZcFOw8mIoRXqQPIiuhRXmSBpsgtxZB1P7nxcq_1SYmLHrGOVJ9olkv7BnwrvI7zI-dv6ikzLLhMQhsjldk2zl5hruhOwj0UKO1v-3srmYY8SfhuQjTJJXH_KQWlFX5kuQJ9Wx87xuwWC-PqDnwietdIJrSgd_HGg3S-l2nWZ1aV6SAGSoqy3rClheaNCEveEw" />
                <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded uppercase">03 / Legacy</div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors">ORBIT-API GATEWAY</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                  An intelligent API gateway with dynamic rate limiting and edge computing capabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">Python</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">Redis</span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">K8s</span>
                </div>
                <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                  <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href="#">link</a>
                  <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href="#">terminal</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
