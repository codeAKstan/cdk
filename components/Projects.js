'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SketchedBorder from './SketchedBorder';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchProjects = async () => {
            const mockData = [
                {
                    _id: 'mock-1',
                    title: 'Neural Sketch Interface',
                    description: 'A deep learning model that translates hand-drawn wireframes into functional React components in real-time.',
                    tags: ['Python', 'PyTorch', 'React'],
                    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
                    githubUrl: '#',
                    demoUrl: '#'
                },
                {
                    _id: 'mock-2',
                    title: 'Blueprint Engine v2',
                    description: 'Custom rendering engine for technical drawings that maintains the organic imperfections of traditional drafting.',
                    tags: ['WebGL', 'Canvas', 'TypeScript'],
                    image: 'https://images.unsplash.com/photo-1503387762-592ede582a7b?w=800&q=80',
                    githubUrl: '#',
                    demoUrl: '#'
                },
                {
                    _id: 'mock-3',
                    title: 'Graphite.css',
                    description: 'A CSS framework specifically designed for building high-performance, sketchbook-themed user interfaces.',
                    tags: ['CSS', 'Framework', 'PostCSS'],
                    image: 'https://images.unsplash.com/photo-1516244439607-ee3f0521361f?w=800&q=80',
                    githubUrl: '#',
                    demoUrl: '#'
                }
            ];

            try {
                const res = await fetch('/api/projects?featured=true', { cache: 'no-store' });
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    setProjects(data.slice(0, 3));
                } else {
                    setProjects(mockData);
                }
            } catch (error) {
                console.error("Failed to fetch projects, using mock data", error);
                setProjects(mockData);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    useGSAP(() => {
        if (loading || projects.length === 0) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
            }
        });

        tl.from(".projects-header", { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" })
          .from(".project-card", {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 0.8,
            ease: "back.out(1.2)"
          }, "-=0.4");

    }, { dependencies: [loading, projects], scope: containerRef });

    if (loading) {
        return (
            <section className="story-wrapper min-h-screen flex items-center justify-center py-32 px-6" id="projects">
                <div className="max-w-7xl mx-auto text-center font-note text-xl">
                    <p className="animate-pulse">Loading Selected Works...</p>
                </div>
            </section>
        );
    }

    if (projects.length === 0) return null;

    return (
      <section ref={containerRef} className="story-wrapper min-h-screen flex items-center justify-center py-32 px-6 border-y-2 border-dashed border-[#2c2c2c]/10" id="projects">
        <div className="max-w-7xl mx-auto w-full">
          <div className="projects-header flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-note text-[#ff8a65] text-lg font-bold uppercase mb-2 block tracking-widest">Deployment Log</span>
              <h2 className="text-4xl md:text-6xl font-sketch text-[#2c2c2c] relative inline-block">
                Selected Works
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#ff8a65]/30 rounded-full skew-x-12"></div>
              </h2>
            </div>
            <Link href="/projects" className="group flex items-center gap-2 font-sketch text-xl text-[#4a4a4a] hover:text-[#ff8a65] transition-colors">
              <span>Archive.git</span>
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => (
                <SketchedBorder
                    key={project._id}
                    className="project-card bg-white overflow-hidden group flex flex-col hover:shadow-[12px_12px_0px_0px_rgba(255,138,101,0.2)] hover:-translate-y-2 transition-all duration-300"
                    delay={index * 0.1}
                >
                  <div className="h-56 bg-[#cbd5e1]/10 relative overflow-hidden border-b-2 border-[#2c2c2c]/10">
                    {project.image && (
                        <img alt={project.title} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply" src={project.image} />
                    )}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#2c2c2c] text-white font-sketch text-xs rounded-sm transform -rotate-2">
                        Fig. 0{index + 1}
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-sketch text-[#2c2c2c] mb-3 group-hover:text-[#ff8a65] transition-colors uppercase">{project.title}</h3>
                    <p className="font-hand text-xl text-[#666] leading-relaxed mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span key={idx} className="font-note text-sm text-[#ff8a65] border-b border-[#ff8a65]/30 px-1 italic">#{tag}</span>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-dashed border-[#2c2c2c]/10 flex justify-between items-center mt-auto">
                      <div className="flex gap-4">
                        {project.demoUrl && (
                            <a className="material-symbols-outlined text-[#2c2c2c]/40 hover:text-[#ff8a65] transition-colors text-2xl" href={project.demoUrl} target="_blank" rel="noopener noreferrer">open_in_new</a>
                        )}
                        {project.githubUrl && (
                            <a className="material-symbols-outlined text-[#2c2c2c]/40 hover:text-[#ff8a65] transition-colors text-2xl" href={project.githubUrl} target="_blank" rel="noopener noreferrer">code</a>
                        )}
                      </div>
                      <span className="font-note text-xs opacity-30 uppercase tracking-widest">v1.0-release</span>
                    </div>
                  </div>
                </SketchedBorder>
            ))}
          </div>
        </div>
      </section>
    )
}
