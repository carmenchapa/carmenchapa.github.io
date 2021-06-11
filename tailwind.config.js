const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        html: '#e34c26',
        js: '#f1e05a',
        ts: '#2b7489',
        php: '#4F5D95',
        bg: '#F9F9F9'
      },
      fontFamily: {
        sans: ['DMSans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
