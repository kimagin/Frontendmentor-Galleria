// const { default: plugin } = require('tailwindcss')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Screen Size
      screens: {
        '7xl': '80rem',
      },
      // Typography
      fontFamily: {
        serif: ['Libre Baskerville', 'serif'],
      },
      fontSize: {
        200: '12.5rem',
        56: '3.5rem',
        24: '1.5rem',
        18: '1.125rem',
        15: '0.937rem',
        14: '0.875rem',
        13: '0.813rem',
        12: '0.75rem',
        9: '0.563rem',
      },
      lineHeight: {
        150: '9.375rem',
        64: '4rem',
        29: '1.813rem',
        28: '1.75rem',
        22: '1.375rem',
        19: '1.188rem',
        17: '1.063rem',
        15: '0.938rem',
        11: '0.688rem',
        9: '0.563re',
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
