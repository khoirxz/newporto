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
        thin: "Jakarta-Extralight",
        light: "Jakarta-light",
        body: "Jakarta-regular",
        medium: "Jakarta-medium",
        semibold: "Jakarta-semiBold",
        bold: "Jakarta-bold",
        extrabold: "Jakarta-extraBold",
      },
    },
  },
  plugins: [],
};
