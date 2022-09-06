module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
  },
  mode: "jit",
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Source Sans Pro", "sans-serif"],
        custom2: ["Courgette", "serif"],
        custom3: ["Inter", "sans-serif"],
        custom4: ["Secular One", "sans-serif"],
      },
      boxShadow: {
        shadow1: "0 0 8px 0px white",
      },
      animation: {
        fadeIn: "",
      },
    },
  },
  plugins: [],
};
