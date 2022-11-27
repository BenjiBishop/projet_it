/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      //sm : small 640px
      'sm' : '200px',

      //md : medium 768px
      'md' : '350px',

      //lg : large 1024px
      'lg' : '500px',

      //xl : extra large 1280px
      'xl' : '650px',

      //2xl : double extra large 1536px
      '2xl' : '700px'

    },
    extend: {},
  },
  plugins: [],
}
