/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        prata: ['Prata', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        luxury: {
          gold: '#D4AF37',
          darkgold: '#B8941F',
          bronze: '#CD7F32',
          darkbronze: '#A0522D',
        },
      },
      animation: {
        'zoom-slow': 'zoomSlow 20s ease-in-out infinite',
      },
      keyframes: {
        zoomSlow: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
