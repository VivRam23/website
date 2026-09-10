/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F6F0',
        'cream-alt': '#F0EFE6',
        ink: '#1C1B16',
        olive: {
          DEFAULT: '#5B6B45',
          dark: '#48542E',
          700: '#4A5638',
          600: '#5B6B45',
          500: '#6E7F55',
        },
        clay: {
          DEFAULT: '#C08A4E',
          600: '#B67B3B',
        },
        stone: {
          DEFAULT: '#8A8578',
          600: '#716C60',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
