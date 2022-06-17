const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        brand: colors.orange,
        red: {
          50: '#FFE6E6',
          100: '#FFB8B8',
          200: '#FF8A8A',
          300: '#FE5C5C',
          400: '#FE2F2F',
          500: '#FE0101',
          600: '#CB0101',
          700: '#980101',
          800: '#660000',
          900: '#330000',
        },
      },
      fontFamily: {
        sans: ['Rubik'],
        horror: ['Special Elite', 'ui-sans-serif', 'system-ui'],
      },
      dropShadow: { dark: '5px 5px 10px #000' },
    },
  },
  plugins: [],
};
