/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { 
        blue: '#4B5EFC',
        darkBlue: '#17171C',
        ash: {
          100: '#4E505F',
          200: '#2E2F38',
        },
      },
    },
  },
  plugins: [],
};
