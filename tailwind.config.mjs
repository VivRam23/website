/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        'paper-alt': '#EFEDE7',
        ink: '#121210',
        grey: {
          50: '#F7F6F2',
          200: '#E3E1D9',
          400: '#B4B1A6',
          500: '#8C8A7F',
          600: '#6D6B61',
          700: '#4C4A43',
        },
        orange: {
          DEFAULT: '#F15A24',
          600: '#D9491A',
          700: '#B83B14',
          50: '#FDEEE7',
        },
      },
      fontFamily: {
        display: ['"Archivo"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      letterSpacing: {
        widest2: '0.16em',
      },
    },
  },
  plugins: [],
};
