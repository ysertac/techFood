/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow"],
        quattrocento: ["quattrocento"],
        satisfy: ["satisfy"],
      },
      colors: {
        specYellow: "#FDC913",
        specLightGrey: "#5F5F5F",
        specDimGrey: "#292929",
        specRed: "#CE2829",
        specBeige: "#FAF7F2",
      },
      screens: {
        mobile: "500px",
      },
    },
  },
  plugins: [],
};
