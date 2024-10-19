/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#60a5fa',
        accent: '#93c5fd',
        background: '#0f172a',
        surface: '#1e293b',
        text: '#94a3b8', // Updated text color
      },
    },
  },
  plugins: [],
};