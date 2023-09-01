/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            'light-gold': 'rgb(255, 235, 205)'
        }
    },
  },
  plugins: [],
}

