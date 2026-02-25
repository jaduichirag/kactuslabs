/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
        },
      },
      fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
}
