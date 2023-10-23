/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aldrich: ["Aldrich"],
      },
    },
  },
  colors: {
    blue: {
      900: "#0E2954",
    },
  },
  plugins: [],
};
