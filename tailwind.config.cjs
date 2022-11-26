/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'holmgang-beige': '#F4F2DB',
        'holmgang-dark': '#141308',
        'holmgang-green': '#28250F',
      }
    },
   
    width: {
      '12/25':'48%'
    },
    fontFamily: {
      nordicablack: ['NordicaBlack'],
      nordicaharline: ['NordicaHarline'],
      nordicaregular: ['NordicaRegular'],
      nordicathin: ['NordicaThin'],
      runytunes: ['RunyTunes']
    },
    fontSize: {
      'title': '20vw'
    },
    backgroundImage: {
      'screenshot1': "url('./src/assets/holmgang1')",
      'screenshot2': "url('./src/assets/holmgang2')",
      'screenshot3': "url('./src/assets/holmgang3')",
      'screenshot4': "url('./src/assets/holmgang4')",
      
     }
  },
  plugins: [],
}
