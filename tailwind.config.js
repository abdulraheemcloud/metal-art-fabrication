/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#071017',
          900: '#0b151d',
          800: '#111e28',
          700: '#1a2b37',
        },
        steel: {
          300: '#c7d0d5',
          400: '#93a4ad',
          500: '#647781',
          600: '#40525c',
        },
        bone: {
          50: '#f5f2ec',
          100: '#e8e2d7',
          200: '#c9c1b4',
        },
        accent: {
          400: '#d9965f',
          500: '#c77b3f',
          600: '#9c5a2f',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Arial Narrow', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '-0.06em',
      },
      boxShadow: {
        soft: '0 24px 70px -28px rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
};
