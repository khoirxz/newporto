/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thin: "TT-Commons-Extralight",
        light: "TT-Commons-light",
        body: "TT-Commons-regular",
        medium: "TT-Commons-medium",
        semibold: "TT-Commons-semiBold",
        bold: "TT-Commons-bold",
        extrabold: "TT-Commons-extraBold",
      },
    },
  },
  plugins: [],
};
