/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        red_display: ['Red Hat Display', 'sans-serif'],
      },
      backgroundImage: {
        'mainImage': 'url(@/assets/images/app/app-bg.png)',
        'adsImage': 'url(@/assets/images/article/111.jpg)',
      }
    },
    plugins: [],
  }
}
