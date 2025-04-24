/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7f5',
          100: '#f0ebe5',
          200: '#e2d5c9',
          300: '#d0b9a5',
          400: '#b99c83',
          500: '#a78267',
          600: '#8f6a52',
          700: '#755746',
          800: '#60483c',
          900: '#4e3c34',
          950: '#2c211d',
        },
        accent: {
          50: '#f3f9e9',
          100: '#e5f2d1',
          200: '#cce6a8',
          300: '#aed376',
          400: '#94bf4d',
          500: '#77a334',
          600: '#5d8225',
          700: '#476420',
          800: '#3b511f',
          900: '#32461d',
          950: '#18260d',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};