'use client';

import { useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Create the full-page scroll storytelling effect
      const sections = gsap.utils.toArray('.story-wrapper');

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: true, // This ensures each section pushes the next one down
          snap: {
            snapTo: 1,
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut"
          }
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
