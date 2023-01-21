/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
      darkanime: '#2b1055',
      lightanime: '#7597de',
      zinc: '#d4d4d8',
      violet: '#0f172a',
      squidred: '#ed1b76',
      squidgreen: '#037a76',
      },
      borderRadius: {
        circle: '50%',
      },
      spacing: {
        z: '50%',
      },
    },
    animation: {
      glow: 'glow 5s ease-in-out infinite',
    },
    keyframes: {
      glow: {
        '0%, 100%': { color: '#d4d4d8' },
        '50%': { color: '#2b1055' },
      }
    },
  },
  plugins: [],
}
