/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "costa/bosque": madera, verde bosque, arena, cielo
        wood: {
          50: '#f7f1e8',
          100: '#ede0cc',
          200: '#dcc39c',
          300: '#c8a273',
          400: '#ab7f52',
          500: '#8f6540',
          600: '#734f34',
          700: '#5c3f2b',
          800: '#4a3324',
          900: '#3d2b1f',
        },
        forest: {
          50: '#eef4ef',
          100: '#d7e6da',
          200: '#b0cdb6',
          300: '#84b18e',
          400: '#5c9268',
          500: '#41764c',
          600: '#325d3b',
          700: '#294a31',
          800: '#233c29',
          900: '#1c3021',
        },
        sand: {
          50: '#fdfbf6',
          100: '#f9f3e6',
          200: '#f1e5cb',
          300: '#e6d2a6',
          400: '#d8ba7c',
        },
        sky: {
          50: '#eef7fb',
          100: '#d7edf5',
          200: '#aedbeb',
          300: '#7ec4dc',
          400: '#4fa8c6',
          500: '#3489a8',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulseSlow 2.8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45)' },
          '50%': { boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)' },
        },
      },
    },
  },
  plugins: [],
}
