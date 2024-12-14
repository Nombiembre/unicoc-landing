/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        bricolage: 'Bricolage Grotesque',
      },
      colors: {
        'dark-blue': '#1C1E33',
        primary: {
          50: '#E1CED2',
          100: '#CCAAB1',
          200: '#C397A0',
          300: '#BA848F',
          400: '#B1717E',
          500: '#A85E6C',
          600: '#A04A5B',
          700: '#983549',
          800: '#902137',
          900: '#890C25',
          950: '#082f49',
        },
      },

      borderRadius: {
        '5xl': 'calc(2rem + 1px)',
        default: 'calc(0.5rem + 1px)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('@tailwindcss/typography'),
  ],
};
