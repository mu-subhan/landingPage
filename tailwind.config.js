/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'progress-gradient': 'linear-gradient(90.3deg, #068EF7 -18.53%, #21C5CB 99.74%)',
      },
    },
  },
  plugins: [],
}