// const { default: plugin } = require('tailwindcss')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Typography
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
      },
      fontSize: {
        200: '200px',
        56: '56px',
        24: '24px',
        18: '18px',
        15: '15px',
        14: '14px',
        13: '13px',
        12: '12px',
        9: '9px',
      },
      lineHeight: {
        150: '150px',
        64: '64px',
        29: '29px',
        28: '28px',
        22: '22px',
        19: '19px',
        17: '17px',
        15: '15px',
        11: '11px',

        9: '9px',
      },
      // Colors
      colors: {
        void: '#000000',
        'dark-gray': '#7D7D7D',
        'mid-gray': 'E5E5E5',
        'low-gray': '#F3F3F3',

        snow: '#FFFFFF',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.56'),
          lineHeight: theme('lineHeight.64'),
        },
        h2: {
          fontSize: theme('fontSize.24'),
          lineHeight: theme('lineHeight.29'),
        },
        h3: {
          fontSize: theme('fontSize.18'),
          lineHeight: theme('lineHeight.22'),
        },
        p: {
          fontSize: theme('fontSize.14'),
          lineHeight: theme('lineHeight.28'),
        },
        a: {
          fontSize: theme('fontSize.9'),
          lineHeight: theme('lineHeight.11'),
        },
      })
    }),
  ],
}
