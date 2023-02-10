/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'flame-sans': ['FlameSans', 'serif'],
        'flame-regular': ['FlameRegular', 'serif'],
        'flame-bold': ['FlameBold', 'serif'],
        'barlow': ['Barlow', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
