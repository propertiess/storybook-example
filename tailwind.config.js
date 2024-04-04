/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        primary: "var(--primary-bg-color)",
        secondary: "var(--secondary-bg-color)",
      },
    },
  },
  plugins: [],
};
