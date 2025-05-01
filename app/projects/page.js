"use client"

import { useEffect, useState } from 'react'
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        setProjects(data)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 section-padding">
        <h1 className="section-heading">Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 section-padding">
      <h1 className="section-heading">My Projects</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Here are some of the projects I've worked on. Each project represents different skills and technologies I've
        mastered in backend development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}
