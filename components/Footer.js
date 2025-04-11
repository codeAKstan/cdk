import Link from "next/link"
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="flex items-center">
                <span className="text-3xl">{"<"}</span>
                <span>CodeAKstan</span>
                <span className="text-3xl">{"/>"}</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400">Building scalable backend solutions with modern technologies.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/codeAKstan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/codeAKstan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
              <a href="mailto:codeakstan@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <FiMail size={20} />
              </a>
            </div>
            <p className="mt-4 text-gray-400">Feel free to reach out for collaborations or just a friendly chat!</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Obumneme Anigbo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
