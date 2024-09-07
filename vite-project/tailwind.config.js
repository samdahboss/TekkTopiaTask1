/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: 'var(--orange)', // Add your custom color here
      },
      maxHeight:{
        'cart': '10rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          'overflow': 'auto',
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Webkit browsers (Chrome, Safari) */
        }
      }, ['responsive', 'hover']);
    }
  ],
}

