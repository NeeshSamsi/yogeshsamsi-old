module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgmax: { max: "1023px" },
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        brown: "var(--color-brown)",
        cream: "var(--color-cream)",
      },
      spacing: {
        "col-all": "10%",
        "col-main": "20%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-hamburgers")],
};
