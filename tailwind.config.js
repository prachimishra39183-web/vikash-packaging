/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#17121F',
          50: '#3A2F4A',
          100: '#2E2438',
          200: '#241A32',
          300: '#1D1528',
          400: '#17121F',
          500: '#100B18',
        },
        ivory: {
          DEFAULT: '#F5F0E8',
          50: '#FBF8F2',
          100: '#F5F0E8',
          200: '#EBE4D6',
          300: '#DFD5C2',
          400: '#C9BDA3',
        },
        chartreuse: {
          DEFAULT: '#D6FF45',
          50: '#F2FFC2',
          100: '#E8FF9A',
          200: '#D6FF45',
          300: '#BCE028',
          400: '#9CB813',
        },
        coral: {
          DEFAULT: '#FF7043',
          50: '#FFD3C2',
          100: '#FFA884',
          200: '#FF7043',
          300: '#E5522A',
          400: '#BF3D17',
        },
        silver: {
          DEFAULT: '#C7CBD1',
          100: '#F0F1F3',
          200: '#E0E2E6',
          300: '#C7CBD1',
          400: '#9CA0A8',
          500: '#6E7178',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '0.9' }],
        '11xl': ['12rem', { lineHeight: '0.85' }],
        '12xl': ['16rem', { lineHeight: '0.82' }],
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'spin-slower': 'spin 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
