"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const skills = [
    { name: "Python", level: 90 },
    { name: "PHP", level: 85 },
    { name: "Django", level: 80 },
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 },
    // { name: "Flask", level: 70 },
    { name: "HTML/CSS", level: 80 },
    { name: "JavaScript", level: 85 },
  ]

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div ref={ref} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Skills</h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's a visualization of my technical skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-xl font-bold mb-6">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git",
              "RESTful APIs",
              "React",
              "Next.js",
              "VS Code",
              "Database Design",
              "OOP",
              "DevOps",
              "MVC Architecture",
              "API Integration",
              "Version Control",
              "Problem Solving",
              "Team Collaboration",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white px-4 py-2 rounded-lg shadow-md"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}