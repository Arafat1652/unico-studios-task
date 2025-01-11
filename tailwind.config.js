/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont:  " 'Montserrat', serif",
      },
      backgroundColor:{
        unic: '#2B2B2B'
      }
    },
  },
  plugins: [require('daisyui'),],
}