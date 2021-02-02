module.exports = {
  purge: {
    enabled: true, // set to true for production
    content: ["./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("kutty")],
};
