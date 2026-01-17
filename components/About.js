export default function About() {
    return (
      <section className="py-32 px-6" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-xl bg-surface-dark border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700"></div>
              <img alt="Professional portrait of a software architect" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDna8B6Xhef38AYy8FZo0kCUuwXdsdQCVXlAyUayZEXGbKHjNh-QI5T5EonhlTx9YODaeNTIXYGQDYe5R8cOQGfb91yaqVfJ_DPm86Zk-71Y7WL8TGjxFjkUaLOw38hXaAwEzuWu2UOCS5tEb0iFGqxSW2wMUqliMIhu7Kd9uZhL4U96D-s1V1BdtunUGw7P4nP8fcekmqpSa1gSh5xUQzJapbXIhCoZIotsoKS-gJp9AwzToAC_NKDkanioINPmGD4Y-yvtWkbPdI" />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-background-dark/80 backdrop-blur border border-white/10 rounded-lg">
                <p className="mono-text text-[10px] text-primary mb-1 tracking-widest uppercase">System Integrity Check</p>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%]"></div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-xl"></div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">THE BLUEPRINT</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in building robust backend systems and pixel-perfect frontend experiences. My approach is rooted in the philosophy that <span className="text-primary">complexity is the enemy of reliability</span>.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Whether it's orchestrating Kubernetes clusters or fine-tuning React rendering cycles, I translate high-level business requirements into elegant, high-performance code that scales effortlessly.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 rounded bg-surface-dark border border-white/10 text-xs mono-text font-bold text-slate-300">#SYSTEM_DESIGN</span>
              <span className="px-3 py-1 rounded bg-surface-dark border border-white/10 text-xs mono-text font-bold text-slate-300">#FULLSTACK_ENG</span>
              <span className="px-3 py-1 rounded bg-surface-dark border border-white/10 text-xs mono-text font-bold text-slate-300">#CLOUD_ARCHITECT</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
