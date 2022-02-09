module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "360px",
      sm: "512px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        dark: "#222222",
        light: "#F4EDE1",
        brown: "#362009",
        cream: "#E9C493",
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
}
