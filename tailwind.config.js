// import { Config } from "tailwindcss";
import flowbitePlugin from "flowbite/plugin";

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#BB9457",
        textColor: "#6F1D1B",
        bgColor1: "#432818",
        textColor2: "#FFE6A7",
        lightbg: "#56331F",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [flowbitePlugin],
};

export default tailwindConfig;
