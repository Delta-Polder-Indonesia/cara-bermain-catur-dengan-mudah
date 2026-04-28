/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chess-green': '#81b64c',
        'chess-dark-green': '#5c8a32',
        'chess-light-green': '#a3d17a',
        'chess-black': '#312e2b',
        'chess-white': '#ffffff',
        'chess-gray': '#f1f1f1',
      }
    },
  },
  plugins: [],
}
