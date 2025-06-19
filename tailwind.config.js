/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4907a8',
        'secondary': '#005bd8',
        'accent': '#00a1b4',
        'success': '#00bb94',
        'highlight': '#00e46c',
        'light': '#00f4be',
        'lighter': '#00fadf',
        'bright': '#00fffa',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to left bottom, #4907a8, #005bd8, #0082d5, #00a1b4, #00bb94, #00c98c, #00d77f, #00e46c, #00ed98, #00f4be, #00fadf, #00fffa)',
      },
    },
  },
  plugins: [],
} 