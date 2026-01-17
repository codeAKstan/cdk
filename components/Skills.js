export default function Skills() {
    return (
      <section className="py-32 px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="mono-text text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Tech Stack</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">SYSTEM CAPABILITIES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Skills Group 1: Frontend */}
            <div className="md:col-span-2 lg:col-span-2 bg-surface-dark border border-white/10 rounded-xl p-8 flex flex-col justify-between hover:bg-surface-dark/60 transition-colors">
              <div>
                <span className="material-symbols-outlined text-primary mb-4 text-3xl">terminal</span>
                <h4 className="text-xl font-bold text-white mb-4">Frontend Engineering</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm mono-text">React / Next.js</span>
                    <span className="text-primary text-xs font-bold">98%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm mono-text">TypeScript</span>
                    <span className="text-primary text-xs font-bold">95%</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm mono-text">Tailwind CSS</span>
                    <span className="text-primary text-xs font-bold">100%</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Skills Group 2: Core Focus */}
            <div className="md:col-span-2 lg:col-span-4 bg-primary text-background-dark rounded-xl p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <span className="material-symbols-outlined text-[300px]">architecture</span>
              </div>
              <h4 className="text-2xl md:text-4xl font-black italic uppercase leading-none mb-4">Software Architecture &amp; System Design</h4>
              <p className="text-background-dark/80 max-w-lg font-medium leading-relaxed">
                Expertise in microservices orchestration, event-driven architecture, and highly available distributed systems. I design for scale, security, and developer productivity.
              </p>
            </div>
            {/* Skills Group 3: Backend */}
            <div className="md:col-span-2 lg:col-span-3 bg-surface-dark border border-white/10 rounded-xl p-8 hover:bg-surface-dark/60 transition-colors">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">database</span>
              <h4 className="text-xl font-bold text-white mb-4">Backend Infrastructure</h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Environment</span>
                  <span className="text-white mono-text text-sm">Node / Go / Python</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Storage</span>
                  <span className="text-white mono-text text-sm">PostgreSQL / Redis</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Message</span>
                  <span className="text-white mono-text text-sm">Kafka / RabbitMQ</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Security</span>
                  <span className="text-white mono-text text-sm">OAuth / JWT / SSL</span>
                </div>
              </div>
            </div>
            {/* Skills Group 4: DevOps */}
            <div className="md:col-span-2 lg:col-span-3 bg-surface-dark border border-white/10 rounded-xl p-8 hover:bg-surface-dark/60 transition-colors">
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">cloud_done</span>
              <h4 className="text-xl font-bold text-white mb-4">DevOps &amp; Cloud</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">AWS / GCP</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Kubernetes</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Terraform</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">CI/CD Pipelines</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Prometheus</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">Prometheus</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
