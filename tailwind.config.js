/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        martell: "#001646",
        martellSub: "#e8c27d",
      },
    },
  },
  plugins: [],
};
