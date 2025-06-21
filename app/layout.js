import { Inter } from "next/font/google"
import "./globals.css"
import NextAuthProvider from "@/components/NextAuthProvider"
import ConditionalLayout from "@/components/ConditionalLayout"

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
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
