/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    backgroundImage: {
      'app-bg-image': "url('/src/assets/images/bg.png')",
    },
  },
  plugins: [],
};
