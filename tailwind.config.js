/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}', // 👈 importante
    './app/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          900: '#004d59',
          800: '#00778c',
        },
      },
    },
  },
  plugins: [],
}
