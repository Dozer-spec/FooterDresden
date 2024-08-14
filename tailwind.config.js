/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // Include the app directory if used
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik'],
      },
    },
  },
  plugins: [],
}
