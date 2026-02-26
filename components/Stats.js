'use client';

export default function Stats() {
    return (
      <section className="py-20 border-y-2 border-dashed border-[#2c2c2c]/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: "Years Experience", value: "05+" },
            { label: "Projects", value: "120+" },
            { label: "Avg Latency", value: "24ms" },
            { label: "System Uptime", value: "99.9%" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start group">
              <span className="font-sketch text-5xl md:text-6xl text-[#2c2c2c] group-hover:text-[#ff8a65] transition-colors">
                {stat.value}
              </span>
              <span className="font-note text-lg text-[#666] mt-2">
                {stat.label}
              </span>
              {/* Decorative underline */}
              <div className="w-16 h-1 bg-[#2c2c2c]/5 mt-1 rounded-full group-hover:bg-[#ff8a65]/20 transition-all"></div>
            </div>
          ))}
        </div>
      </section>
    )
  }
