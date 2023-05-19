/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ff_primary': ['Roboto Slab'],
        'ff_secondary': ['Roboto']
      },
      colors: {
        'BACKGROUND_900': '#232129',
        'BACKGROUND_800': '#312E38',
        'BACKGROUND_700': '#3E3B47',
    
        'WHITE': '#F4EDE8',
        'ORANGE': '#FF9000',
    
        'GRAY_100': '#999591',
        'GRAY_300': '#666360',
    
        'RED': '#FF002E',
      }
    },
    backgroundImage: {
      'backgroundImg': "url('./src/assets/backgroundImg.svg')",
    },
  },
  plugins: [],
}

