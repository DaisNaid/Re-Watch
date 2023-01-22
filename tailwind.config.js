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
      dark_inner: '#7c66dc',
      lightanime: '#3e63dd',
      light_inner: '#8da4ef',
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
      glow_text: 'glow_text 5s ease-in-out infinite',
      glow_motto: 'glow_motto 6s ease-in-out 2'
    },
    keyframes: {
      glow_text: {
        '0%, 100%': { color: '#8da4ef' },
        '50%': { color: 'white' },
      },
      glow_motto: {
        '0%, 100%': { color: 'black', background: '#8da4ef' },
        '50%': { color: '#8da4ef', background: '#d4d4d8' }
      }
    },
  },
  plugins: [],
}
