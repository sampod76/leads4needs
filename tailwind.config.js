/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens : {
        sm: '480px',
        smm: '668px',
        md: '768px',
        mdd: '896px',
        lg: '976px',
        lgg: '1160px',
        lggg: '1230px',
        xl: '1440px'
      },
    },
  },
  plugins: [],
}
