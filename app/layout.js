import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NextAuthProvider from "@/components/NextAuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Obumneme Anigbo | Backend Developer",
  description: "Portfolio website of a passionate backend developer specializing in Python, Django, PHP, and MySQL",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <NextAuthProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
