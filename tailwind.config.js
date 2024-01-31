/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Cute Font', 'sans-serif'],
      },
    },
    backgroundImage: {
      'app-bg-image': "url('/src/assets/images/bg.png')",
    },
  },
  plugins: [],
};
