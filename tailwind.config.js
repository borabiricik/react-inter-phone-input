/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        childOfLight: '#EFF4F7',
        fadingSunset: '#B5B5C3',
        leadBlack: '#212121',
        bluntGray: '#B6B9C8',
      },
    },
  },
  plugins: [],
};
