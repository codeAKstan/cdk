'use client';

export default function About() {
    return (
      <section className="py-32 px-6" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square bg-white sketch-border p-4 shadow-[10px_10px_0px_0px_rgba(44,44,44,0.05)] transform -rotate-1">
              <div className="w-full h-full bg-[#cbd5e1]/20 overflow-hidden relative grayscale sepia-[0.2] hover:grayscale-0 transition-all duration-700">
                <img alt="Professional portrait" className="w-full h-full object-cover mix-blend-multiply" src="/me.jpeg" />
                <div className="absolute top-2 left-2 right-2 flex justify-between px-2 font-note text-xs opacity-50">
                    <span>img_src: me.jpeg</span>
                    <span>01/01/2024</span>
                </div>
              </div>
            </div>
            {/* Sketchy tape/stickers */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#cbd5e1]/40 rotate-2 opacity-50"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-[#ff8a65] opacity-30 rounded-br-3xl"></div>
          </div>

          <div className="flex flex-col gap-8 order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-sketch text-[#2c2c2c] relative inline-block self-start">
                The Blueprint
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#ff8a65]/40 rounded-full skew-x-12"></div>
            </h2>
            <div className="space-y-6">
                <p className="font-hand text-2xl text-[#4a4a4a] leading-relaxed">
                  I specialize in building robust backend systems and pixel-perfect frontend experiences. My approach is rooted in the philosophy that <span className="text-[#ff8a65] font-sketch">complexity is the enemy of reliability</span>.
                </p>
                <p className="font-note text-xl text-[#666] leading-relaxed">
                  Whether it's orchestrating Kubernetes clusters or fine-tuning React rendering cycles, I translate high-level business requirements into elegant, high-performance code that scales effortlessly.
                </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {['#SYSTEM_DESIGN', '#FULLSTACK_ENG', '#CLOUD_ARCHITECT'].map(tag => (
                <span key={tag} className="font-sketch text-sm px-4 py-1 border border-[#2c2c2c]/30 rounded-full hover:border-[#ff8a65] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
