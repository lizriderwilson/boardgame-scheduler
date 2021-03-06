const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      yellow: colors.yellow,
      white: colors.white,
      teal: colors.teal,
      amber: colors.amber,
      orange: colors.orange,
    },
    extend: {
      colors: {
        darkbrown: "#5a3d2b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
