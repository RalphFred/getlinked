/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#FE34B9",
        "lighter-purple": "#D434FE",
        "dark-purple": "#150E28",
        "light-purple": "#903AFF",
      },
      backgroundColor: {
        "light-pink": "#FE34B9",
        "lighter-purple": "#D434FE",
        "dark-purple": "#150E28",
        "light-purple": "#903AFF",
      },
      textColor: {
        "light-pink": "#FE34B9",
        "lighter-purple": "#D434FE",
        "dark-purple": "#150E28",
        "light-purple": "#903AFF",
      },
      fontFamily: {
        'clash': ['clash-display', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'unica': ['Unica One', 'cursive'],
      },
    },
  },
  plugins: [],
};
