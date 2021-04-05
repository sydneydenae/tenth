const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require(`tailwindcss/colors`)

module.exports = {
  purge: [],
  
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'mmb': {
          DEFAULT: '#1481BA',
          '50': '#BCE3F8',
          '100': '#A5DAF5',
          '200': '#77C7F0',
          '300': '#49B3EB',
          '400': '#1BA0E6',
          '500': '#1481BA',
          '600': '#0F618C',
          '700': '#0A415E',
          '800': '#052130',
          '900': '#000102'
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
