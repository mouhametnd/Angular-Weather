/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,scss}", "./src/styles.scss"],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#3c429e",
          200: "#4c52ad",
        },
        yellow1: "#fac742",
        white: "#fff",
        grey: "#ededed",
        shadowdark: "rgba(0 0 0 / 0.3)",
        shadowlight: "rgba(255 255 255 / 0.1)",
      },
    },
  },
  plugins: [],
};
