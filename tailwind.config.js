/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#231f32',
      'secondary': '#ff0066',
    }),
    extend: {
      colors: {
        'navcolour':'#004900',
        'pinktheme':'#ff1493',
        'bluetheme':'#0C356A',
        'green':'#1C7947',
        'link':'#5356FF',
        'red':'#ff0000',
        'goldenyellow':'#FFC000',
        'aqua':'#40F8FF',
        'olive':'#87A922'

      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/hero.jpg')",
        'team_work':"url('/src/images/team_4540467 (1).png')",
        
      },
      
      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      }
    },
    
  },
  plugins: [
    require('flowbite/plugin')
]

}
