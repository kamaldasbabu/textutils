/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to scan all JS, JSX, TS, TSX files in your src folder
    "./public/index.html",         // Include if you have any Tailwind classes in index.html
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

