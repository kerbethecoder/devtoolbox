/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        lightBg: '#c3c3c3',
        darkBg: '#28292a',
        lightFnt: '#e3e3e3',
        darkFnt: '#1a1a1a',
        lightScnd: '#d9d9d9',
        darkScnd: '#202125',
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
