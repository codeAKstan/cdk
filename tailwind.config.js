/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#10d1cd",
                "background-light": "#f7f7f7",
                "background-dark": "#1a1a1a",
                "surface-dark": "#212121",
                "accent-cyan": "#10d1cd",
                "background-true-black": "#000000",
                "panel-border": "#1a1a1a",
                "border-dark": "#1a1a1a",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"]
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "full": "9999px"
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
  }
