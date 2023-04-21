/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
        12: '12px',
        9: '9px',
      },
      spacing: {
        2.5: '2.5px',
        2: '2px',
      },
    },
  },
  plugins: [],
}
