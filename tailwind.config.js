module.exports = {
  mode: "jit",
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
        dark: "#222222",
        light: "#F4EDE1",
        brown: "#362009",
        cream: "#E9C493",
        "dark-30": "rgba(34, 34, 34, 0.3)",
        "dark-50": "rgba(34, 34, 34, 0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-hamburgers")],
};
