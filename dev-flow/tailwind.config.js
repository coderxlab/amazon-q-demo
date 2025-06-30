/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      spacing: {
        '15': '3.75rem',
        '108': '27rem',
        '143': '35.75rem',
        '156': '39rem',
        '160': '40rem',
        '175': '43.75rem',
        '180': '45rem',
      }
    },
  },
  plugins: [],
}