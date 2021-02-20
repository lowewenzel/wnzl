const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: [
        'Playfair Display',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ],
      body: ['Yrsa', 'serif'],
    },
    fontWeight: {
      bold: 900,
      regular: 300,
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2f3640',
        },
      },
      zIndex: {
        '-1': '-10',
      },
      fontSize: {
        '7.5xl': '5.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        '.horizontal-tb': {
          writingMode: 'horizontal-tb',
        },
        '.vertical-rl': {
          writingMode: 'vertical-rl',
        },
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
