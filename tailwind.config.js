/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        lightClr: '#c3c3c3',
        darkClr: '#1a1a1a',
      },
      fontFamily: {
        abril: ['Abril Fatface', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
