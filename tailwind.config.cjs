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
      },
      keyframes: {
        'slide-up': {
          'from': {
            opacity: 0,
            transform: 'translateY(2rem)',
          },
          'to': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'slide-up': 'slide-up 250ms ease-in-out both'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
