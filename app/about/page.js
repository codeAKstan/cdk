"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="container mx-auto px-4 section-padding">
      <h1 className="section-heading">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/profile.png"
            alt="Obumneme Anigbo"
            width={400}
            height={400}
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>

        <div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Obumneme Anigbo</h2>
            <p className="text-gray-600 mb-6">
              I'm a passionate and results-driven Backend Developer with expertise in building scalable web applications
              and problem-solving using modern frameworks and technologies. Proficient in Python, Flask, Django, PHP,
              MySQL, and PostgreSQL.
            </p>

            <p className="text-gray-600 mb-6">
              Experienced in collaborating with cross-functional teams, writing clean code, and delivering high-quality
              solutions. Currently graduating from the ALX Software Engineering Program, I am seeking opportunities to
              apply my skills in backend development and contribute to innovative projects.
            </p>

            <h3 className="text-xl font-bold mb-3">Education</h3>
            <ul className="list-disc list-inside mb-6 text-gray-600">
              <li>ALX Software Engineering Program (Backend Specialization), Graduation: Oct 2024</li>
              <li>University of Nigeria, Nsukka — Bachelor's Degree in Computer Science</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Work Experience</h3>
            <div className="mb-4">
              <h4 className="font-bold">Freelance Web Developer</h4>
              <p className="text-gray-500">2022 - Present</p>
              <p className="text-gray-600">
                Developed responsive web applications using HTML, CSS, and JavaScript with a focus on clean code and
                accessibility. Integrated client applications with server-side functionality using PHP and MySQL.
                Communicated effectively with clients to gather requirements and delivered solutions that met their
                needs.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold">Quiz-it Project</h4>
              <p className="text-gray-500">May 2024 - June 2024</p>
              <p className="text-gray-600">
                Built a full-stack quiz platform using PHP for server-side logic and HTML, CSS, JS for the interactive
                frontend. Designed the database schema and integrated it with MySQL to manage user data and reward
                systems. Used Git for version control and implemented API to get the quiz questions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python",
            "PHP",
            "Django",
            "Flask",
            "MySQL",
            "PostgreSQL",
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Git",
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="card text-center py-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
