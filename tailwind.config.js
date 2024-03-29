/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        mainGray: "#D1D1D1",
        mainRed: "#E52E2E",
        mainBlue: "#086ED6",
        mainWhite: "#ffffff",
        darkBlue: "#164863",
        lightBlue: "#DDF2FD",
        hoverGray: "#EAEAEA",
        textGray: "#666666",
        textBlack: "#21232C",
        bglightGray: "#FAFAFA",
        bgyellow: "#FFF4CC",
      },
      borderRadius: {
        main: "5px",
      },
    },
  },
  plugins: [],
};
