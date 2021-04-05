const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'MASTERMND-blue': '#1481BA',
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
