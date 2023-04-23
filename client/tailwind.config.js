/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...require('tailwindcss/colors'),
      config: {
        vcolor1: '#454545',
        vcolor2: '#FF6000',
        vcolor3: '#FFA559',
        vcolor4: '#FFE6C7'
      }
    }
  },
  plugins: []
}
