"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.png?height=400&width=400"
              alt="Obumneme Anigbo"
              width={400}
              height={400}
              className="rounded-xl shadow-lg mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate backend developer with expertise in building scalable web applications. With a strong
              foundation in Python, PHP, and database technologies, I create robust, efficient backend systems that
              deliver exceptional performance.
            </p>
            <p className="text-gray-600 mb-6">
              Currently completing the ALX Software Engineering Program with a specialization in backend development,
              I've worked on various projects ranging from quiz platforms to student accommodation systems. I'm
              constantly learning and exploring new technologies to stay at the forefront of backend development.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">My Skills</h3>
              <div className="flex flex-wrap">
                {["Python", "PHP", "Django", "MySQL", "PostgreSQL", "Flask"].map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Link href="/about" className="btn-primary inline-flex items-center">
              Learn More About Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
