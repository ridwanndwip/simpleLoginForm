/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      dropShadow:{
        '4xl' : '0px 20px 10px rgba(0, 0, 0, 0.30)',
        // filter:  drop-shadow(0px 20px 10px rgba(0, 0, 0, $shadow-opacity));
      },
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
      },
      colors:{
        colorContainer: '#ffffff33',
        colorText: '#393E46',
        colorBorder: '#86868b',
      },
      screens:{
        'xs': '480px',
      },
    },
  },
  plugins: [],
}