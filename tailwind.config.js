/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
          primary:'rgb(149, 56, 226)',
          b1: 'rgb(246, 246, 246)',
          details:'rgb(217, 217, 217)',
          products: 'rgba(9, 8, 15, 0.05)',
          body:'rgb(247,247,247)',




      },
      backgroundImage: {
        banner: "url('../assets/banner.jpg')",

      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
}

