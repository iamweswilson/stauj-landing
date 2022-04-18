module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        stauj: {
          100: '#FFEFE1',
          200: '#FFDBB9',
          300: '#F4C79C',
          400: '#E1B387',
          500: '#C99C70',
          600: '#B28960',
          700: '#856546',
          800: '#5C452E'
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
