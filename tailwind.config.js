module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#30A8E6',
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
      },
      container: {
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}
