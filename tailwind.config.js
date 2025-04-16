/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        font: "#2f2222",
        primary: "#f43f46",
        secondary: "#c9242a",
        edit: "#1687d8",
        view: "#213dc9",
        break: "#34c759",
        redShade: "#fffafa",
        redStroke: "#ffdddd",
        darkShade: "rgba(47,34,34,0.10)",
      },
      backgroundImage: {
        'redGradient': "linear-gradient(92deg, #E01E26 0%, #841C1C 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
