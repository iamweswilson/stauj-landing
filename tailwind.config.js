module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        stauj: {
          100: '#C99C70',
          200: '#AC845C'
        }
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
