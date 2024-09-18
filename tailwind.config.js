/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(to bottom, #3b82f6, #9333ea), url("img/banner.jpg")',
      // },
      dropShadow:{
        '4xl' : '0px 20px 10px rgba(0, 0, 0, 0.30)',
        // filter:  drop-shadow(0px 20px 10px rgba(0, 0, 0, $shadow-opacity));
      },
      fontFamily:{
        'Montserrat' : ['Montserrat', 'sans-serif'],
      },
      colors:{
        'Color1' : '#00B8A0',
        'Color1_90' : '#00B8A01A',
        'Color1_20' : '#00B8A0CC',
        'Color2' : '#E7E7E7',
        'color2_30' : '#E7E7E74D',
      },
      screens:{
        'xs': '480px',
      },
      fontSize:{
        'xs': '10px',
        'xs/2': '12px',
      }
    },
  },
  plugins: [],
}