"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })

  return (
    <section className="py-12 md:py-20 bg-blue-500 text-white">
      <div ref={ref} className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

