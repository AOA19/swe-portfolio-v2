const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      olive: "#322F20",
      linen: "#F5ECDF",
      mustard: "#F4B942",
      peach: "#F8D48B",
      irish: "#14591D",
      sage: "#ADBC91",
      periwinkle: {
        100: "#7180B9",
        200:"#576390",
      } 
    },
    fontFamily: {
      sora: ["Sora", "serif"],
      ahsing: ["Ahsing", "sans-serif"],
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
  darkMode: "selector",
};
