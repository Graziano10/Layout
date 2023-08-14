/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1937A2', // Cambia questo colore con quello che desideri
        secondary: '#FFFFFF', // Cambia questo colore con quello che desideri
        tertiary: '#F42305', // Cambia questo colore con quello che desideri
        invert: '#FA8003', // Cambia questo colore con quello che desideri
      },
    },
    screens: {
      xs: "300px",

      s: "548px",

      md: "768px",

      mdd: "857px",

      x: "1025",

      xl: "1280px",

      "3xl": "1900px",
    },
  },
  plugins: [],
};
