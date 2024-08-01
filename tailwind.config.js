/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans:'roboto-mono, monespace',

    },
    
    extend: {
      fontSize:{
        huge:['80rem', { lineHeight: '1' }],

    },
    height: {
      'screen': '100dvh',
    }
  },
  },
  plugins: [],
};
