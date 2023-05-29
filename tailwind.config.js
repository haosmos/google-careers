  /** @type {import('tailwindcss').Config} */
  import defaultTheme from 'tailwindcss/defaultTheme';
  
  
  // eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
