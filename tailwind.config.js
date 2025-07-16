/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E0E7FF',
        accent: '#7F5AF0',
        background: '#0D0A1F',
        text: '#E2E8F0',
        light: '#A1A1AA',
      },
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};