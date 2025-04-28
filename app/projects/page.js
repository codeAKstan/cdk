import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  // Projects from resume
  const projects = [
    {
      id: 1,
      title: "Swivly",
      description: "A platform for students to find accommodations, buy/sell items and more.",
      image: "/projects/swivly.png",
      tags: ["Django", "PostgreSQL", "HTML5"],
      demoUrl: "",
      githubUrl: "https://github.com/codeAKstan/Swivly",
    },
    {
      id: 2,
      title: "Quiz-it",
      description:
        "A quiz platform where users take quizzes and earn rewards. Designed and implemented the quiz system, created reward mechanisms.",
      image: "/projects/quiz-it.png",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      demoUrl: "",
      githubUrl: "https://github.com/codeAKstan/quiz_it-project",
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
      title: "Volt",
      description: "Volt helps you manage workspace availability and provides data-driven insights for efficient office space usage.",
      image: "/volt.png?height=300&width=500",
      tags: ["Nextjs", "Django", "PotsgreSQL", ],
      demoUrl: "",
      githubUrl: "https://github.com/codeAKstan/Volt",
    },
    {
      id: 5,
      title: "DeFiPass",
      description: "Walletless Solana DeFi via walletless passkey authentication.",
      image: "/defi.png?height=300&width=500",
      tags: ["REACT", "VITE"],
      demoUrl: "https://defipass.vercel.app/",
      githubUrl: "https://github.com/codeAKstan/defipass",
    },
    // {
    //   id: 6,
    //   title: "E-commerce Backend",
    //   description: "Backend services for an e-commerce platform including payment processing and inventory management.",
    //   image: "/projects/ecommerce.jpg",
    //   tags: ["Python", "Django", "MySQL", "API"],
    //   demoUrl: "",
    //   githubUrl: "https://github.com/codeAKstan",
    // },
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
