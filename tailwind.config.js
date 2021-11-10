module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {},
    extend: {
      colors: {
        dark: "#222222",
        light: "#F4EDE1",
        brown: "#362009",
        cream: "#E9C493",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
