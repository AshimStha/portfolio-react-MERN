// This section was copied form the official docs of Tailwind css

/** @type {import('tailwindcss').Config} */
export default {
  // dark mode based on a class
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}