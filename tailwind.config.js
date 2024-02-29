/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgr: "url('/src/Assets/280-masjid-AHC-dark-1920.png')",
      },
      spacing: {
        176: "46rem",
      },
    },
  },
  plugins: [],
};
