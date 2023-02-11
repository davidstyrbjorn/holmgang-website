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
      },
      
      width: {
        '12/25':'48%'
      },
      maxWidth: {
        'desktop':'1920px',
        'icon': '200px'
      },
      minWidth: {
        50: '450px',
        '36':'36rem'
      },
      fontFamily: {
        nordicablack: ['NordicaBlack'],
        nordicaharline: ['NordicaHarline'],
        nordicaregular: ['NordicaRegular'],
        nordicathin: ['NordicaThin'],
        runytunes: ['RunyTunes']
      },
      fontSize: {
        'title': '26vw'
      },
      backgroundImage: {
        'screenshot1': "url('./src/assets/holmgang1')",
        'screenshot2': "url('./src/assets/holmgang2')",
        'screenshot3': "url('./src/assets/holmgang3')",
        'screenshot4': "url('./src/assets/holmgang4')",
      },
      spacing: {
        '90vh': '90vh',
        '2full': '200%',
      }
    },
    plugins: [],
  },

  }
