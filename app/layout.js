import "./globals.css"
import NextAuthProvider from "@/components/NextAuthProvider";
import SketchTrail from "@/components/SketchTrail";

export const metadata = {
  title: "codeAKstan // Software Architect Portfolio",
  description: "Engineering high-performance backends and clinical frontends.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Indie+Flower&family=Shadows+Into+Light&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-display sketch-bg pencil-cursor text-[#2c2c2c] transition-colors duration-300">
        <NextAuthProvider>
          <SketchTrail />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
