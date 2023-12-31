module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
          'print': { 'raw': 'print' },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
