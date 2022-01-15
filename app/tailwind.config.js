module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#DC1FFF",
          light: "#DC1FFF",
          extralight: "#DC1FFF",
          dark: "#DC1FFF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
