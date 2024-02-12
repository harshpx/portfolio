/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cantarell:"cantarell",
        poppins:"poppins",
        segoeUI:"segoeUI",
        fallingSky:"fallingSky",
        sfPro:"sfPro",
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
      },
      width: {
        82: '21rem',
        84: '22rem',
        86: '23rem',
        100: '26rem'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      boxShadow:{
        'dark':'0 4px 8px 0 rgba(80, 201, 235, 0.2), 0 6px 20px 0 rgba(80, 201, 235, 0.19);'
      }
    },
  },
  plugins: [],
}

