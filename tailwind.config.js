/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: ["Fira Code", "monospace"],
      roman: ["'Times New Roman'", "serif"],  
      handwriting: ["'Lucida Handwriting'", "cursive"],
    },

    },
  },
  plugins: [],

module.exports = {
  plugins: [require('tailwind-scrollbar-hide')],
}
};







