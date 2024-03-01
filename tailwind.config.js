/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        primaryBg: '#7ab0ef33',
        secondary: '#0E0E12',
        theme: '#DB2777',
      },
    },
  },
  plugins: [],
};
