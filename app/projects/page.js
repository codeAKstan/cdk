import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  // Projects from resume
  const projects = [
    {
      id: 1,
      title: "Swivly",
      description: "A platform for students to find accommodations, buy/sell items and more.",
      image: "/projects/swivly.jpg",
      tags: ["Django", "PostgreSQL", "HTML5"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/codeAKstan/Swivly",
    },
    {
      id: 2,
      title: "Quiz-it",
      description:
        "A quiz platform where users take quizzes and earn rewards. Designed and implemented the quiz system, created reward mechanisms.",
      image: "/projects/quiz-it.jpg",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/codeAKstan/quiz_it-project",
    },
    {
      id: 3,
      title: "Backend API Service",
      description: "RESTful API service built with Django REST Framework for a mobile application.",
      image: "/projects/api.jpg",
      tags: ["Python", "Django", "REST API", "PostgreSQL"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/codeAKstan",
    },
    {
      id: 4,
      title: "Database Management System",
      description: "Custom database management system for a local business to track inventory and sales.",
      image: "/projects/database.jpg",
      tags: ["PHP", "MySQL", "JavaScript"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/codeAKstan",
    },
    {
      id: 5,
      title: "Content Management System",
      description: "A lightweight CMS built with PHP and MySQL for small business websites.",
      image: "/projects/cms.jpg",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/codeAKstan",
    },
    {
      id: 6,
      title: "E-commerce Backend",
      description: "Backend services for an e-commerce platform including payment processing and inventory management.",
      image: "/projects/ecommerce.jpg",
      tags: ["Python", "Django", "MySQL", "API"],
      demoUrl: "https://example.com",
      githubUrl: "https://github.com/codeAKstan",
    },
  ]

  return (
    <div className="container mx-auto px-4 section-padding">
      <h1 className="section-heading">My Projects</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Here are some of the projects I've worked on. Each project represents different skills and technologies I've
        mastered in backend development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
