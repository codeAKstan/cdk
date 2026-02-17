"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('/api/projects?featured=true', { cache: 'no-store' });
                const data = await res.json();
                if (Array.isArray(data)) {
                    // Limit to 3 projects just in case, though admin UI enforces it too
                    setProjects(data.slice(0, 3));
                }
            } catch (error) {
                console.error("Failed to fetch projects", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    if (loading) {
        return (
            <section className="py-32 bg-surface-dark/20 border-y border-white/5 px-6" id="projects">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-slate-500 uppercase tracking-widest text-xs">Loading Selected Works...</p>
                </div>
            </section>
        );
    }

    if (projects.length === 0) {
        // Fallback or empty state? 
        // If no projects are selected, we might want to hide the section or show a placeholder.
        // For now, let's just return nothing or a minimal section to avoid breaking layout.
        return null; 
    }

    return (
      <section className="py-32 bg-surface-dark/20 border-y border-white/5 px-6" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="mono-text text-primary text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Deployment Log</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">SELECTED WORKS</h2>
            </div>
            <Link href="/projects" className="group flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-slate-500 hover:text-primary transition-colors">
              <span>Archive.git</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={project._id} className="bg-surface-dark border border-white/10 rounded-xl overflow-hidden group flex flex-col hover:border-primary/50 transition-all">
                  <div className="h-48 bg-black/40 relative overflow-hidden">
                    <img alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src={project.image} />
                    <div className="absolute top-4 left-4 px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded uppercase">0{index + 1} / Selected</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors uppercase">{project.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono text-slate-500 uppercase border border-slate-700 px-2 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                      {project.demoUrl ? (
                          <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href={project.demoUrl} target="_blank" rel="noopener noreferrer">link</a>
                      ) : (
                          <span className="material-symbols-outlined text-slate-800 cursor-not-allowed">link_off</span>
                      )}
                      {project.githubUrl && (
                          <a className="material-symbols-outlined text-slate-500 hover:text-white transition-colors" href={project.githubUrl} target="_blank" rel="noopener noreferrer">terminal</a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    )
}
