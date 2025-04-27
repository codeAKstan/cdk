"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

export default function ProjectsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  // Featured projects from resume
  const projects = [
    {
      id: 1,
      title: "Swivly",
      description: "A platform for students to find accommodations, buy/sell items and more.",
      image: "/swivly.png?height=300&width=500",
      tags: ["Django", "PostgreSQL", "HTML5"],
      demoUrl: "",
      githubUrl: "https://github.com/codeAKstan/Swivly",
    },
    {
      id: 2,
      title: "Volt",
      description: "Volt helps you manage workspace availability and provides data-driven insights for efficient office space usage.",
      image: "/volt.png?height=300&width=500",
      tags: ["Nextjs", "Django", "PotsgreSQL", ],
      demoUrl: "",
      githubUrl: "https://github.com/codeAKstan/Volt",
    },
    {
      id: 3,
      title: "ValueCycle",
      description: "Marketplace where quality products find new homes, reducing waste and creating value for everyone.",
      image: "/valuecycle.png?height=300&width=500",
      tags: ["REACT", "VITE"],
      demoUrl: "https://value-cycle.vercel.app/",
      githubUrl: "https://github.com/codeAKstan/ValueCycle",
    },
    {
      id: 4,
      title: "DeFiPass",
      description: "Walletless Solana DeFi via walletless passkey authentication.",
      image: "/defi.png?height=300&width=500",
      tags: ["REACT", "VITE"],
      demoUrl: "https://defipass.vercel.app/",
      githubUrl: "https://github.com/codeAKstan/defipass",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents different skills and technologies I've mastered
            in backend development.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="card hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="skill-badge">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {/* <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Live Demo
                </a> */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
