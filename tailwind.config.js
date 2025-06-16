/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#1B4332',
        'forest-light': '#2D6A4F',
        'mountain': '#40916C',
        'sky': '#74C69D',
        'nature': '#B7E4C7',
      },
    },
  },
  plugins: [],
} 