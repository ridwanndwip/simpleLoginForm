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
        colorContainer: '#CCD0CF33',
        // #D3D4D8, 79797B, 7E7E80, 6B6A6C, 534f54, 5C5C5C, 4A5C6A, 06141b
        colorText: '#F8F7F2',
        colorBorder: '#11212D',
      },
      screens:{
        'xs': '480px',
      },
    },
  },
  plugins: [],
}