/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        Poppins_Bold:["Poppins-Bold", "sans-serif"],
        Poppins_Medium:["Poppins-Medium", "sans-serif"],
        Poppins_ExtraBold:["Poppins-ExtraBold", "sans-serif"],
        Roboto_Bold:["Roboto-Bold", "sans-serif"],
        Roboto_ExtraBold:["Roboto-ExtraBold", "sans-serif"],
        Roboto_Medium:["Roboto-Medium", "sans-serif"],
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
