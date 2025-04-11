"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card overflow-hidden group"
    >
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={project.image || "/placeholder.svg?height=300&width=500"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
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
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-700 font-medium"
        >
          <FiExternalLink className="mr-1" /> Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-500 hover:text-blue-700 font-medium"
        >
          <FiGithub className="mr-1" /> GitHub
        </a>
      </div>
    </motion.div>
  )
}
