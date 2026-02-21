/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#00002A",
          800: "#00005E",
          600: "#173DED",
          200: "#BDCDE2",
          100: "#B4BCCD",
        },
      },
      fontFamily: {
        sans: ["Inter", "DM Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};