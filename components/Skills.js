'use client';

export default function Skills() {
    return (
      <section className="py-32 px-6" id="skills">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-note text-[#ff8a65] text-lg font-bold uppercase mb-2 block tracking-widest">Tech Stack</span>
            <h2 className="text-4xl md:text-6xl font-sketch text-[#2c2c2c] relative inline-block">
                System Capabilities
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#ff8a65]/30 rounded-full -rotate-1"></div>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Skills Group 1: Frontend */}
            <div className="md:col-span-2 lg:col-span-2 sketch-border p-8 flex flex-col justify-between hover:bg-white transition-colors transform hover:-rotate-1">
              <div>
                <span className="material-symbols-outlined text-[#2c2c2c] mb-4 text-3xl">terminal</span>
                <h4 className="text-2xl font-sketch text-[#2c2c2c] mb-6">Frontend Engineering</h4>
                <ul className="space-y-4">
                  {[
                    { name: "React / Next.js", level: "98%" },
                    { name: "TypeScript", level: "95%" },
                    { name: "Tailwind CSS", level: "100%" }
                  ].map(skill => (
                    <li key={skill.name} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between font-hand text-xl text-[#4a4a4a]">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="h-2 bg-[#cbd5e1]/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#ff8a65]/60 rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Skills Group 2: Core Focus */}
            <div className="md:col-span-2 lg:col-span-4 bg-[#ff8a65]/5 sketch-border p-8 flex flex-col justify-center relative overflow-hidden group transform rotate-1 hover:rotate-0 transition-transform">
              <div className="absolute -right-10 -bottom-10 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
                <span className="material-symbols-outlined text-[300px]">architecture</span>
              </div>
              <h4 className="text-3xl md:text-5xl font-sketch leading-tight mb-6 text-[#2c2c2c]">Software Architecture &amp; System Design</h4>
              <p className="font-hand text-2xl text-[#4a4a4a] max-w-xl leading-relaxed">
                Expertise in microservices orchestration, event-driven architecture, and highly available distributed systems. I design for scale, security, and developer productivity.
              </p>
            </div>
            {/* Skills Group 3: Backend */}
            <div className="md:col-span-2 lg:col-span-3 sketch-border p-8 hover:bg-white transition-colors transform hover:rotate-1">
              <span className="material-symbols-outlined text-[#2c2c2c] mb-4 text-3xl">database</span>
              <h4 className="text-2xl font-sketch text-[#2c2c2c] mb-6">Backend Infrastructure</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: "Environment", value: "Node / Go / Python" },
                  { label: "Storage", value: "Postgres / MySQL / Mongo" },
                  { label: "Message", value: "RabbitMQ / Redis" },
                  { label: "Security", value: "OAuth / JWT / SSL" }
                ].map(item => (
                    <div key={item.label} className="flex flex-col">
                        <span className="font-note text-sm text-[#ff8a65] uppercase font-bold tracking-widest">{item.label}</span>
                        <span className="font-hand text-xl text-[#4a4a4a]">{item.value}</span>
                    </div>
                ))}
              </div>
            </div>
            {/* Skills Group 4: DevOps */}
            <div className="md:col-span-2 lg:col-span-3 sketch-border p-8 hover:bg-white transition-colors transform hover:-rotate-1">
              <span className="material-symbols-outlined text-[#2c2c2c] mb-4 text-3xl">cloud_done</span>
              <h4 className="text-2xl font-sketch text-[#2c2c2c] mb-6">DevOps &amp; Cloud</h4>
              <div className="flex flex-wrap gap-3">
                {['AWS / GCP', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Docker'].map(tag => (
                    <span key={tag} className="px-4 py-1 font-hand text-lg border-b-2 border-[#ff8a65]/30 text-[#4a4a4a]">
                        {tag}
                    </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
