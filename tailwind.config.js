/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        xl: '1200px',
        lg: '922px',
        md: '768px',
        sm: '481px',
        mobile: '320px',
      },
      fontFamily: {
        montserrat: '"Montserrat", sans-serif',
        'noto-serif': '"NotoSerif", sans-serif',
        monteCario: '"MonteCarlo", sans-serif',
      },
      fontSize: {
        base: ['16px', { lineHeight: '20px' }],
        sm: ['16px', { lineHeight: '27px' }],
        mobile: ['13px', { lineHeight: '15px' }],
      },

      colors: {
        headerTextColor: '#EFF2F4',
        textColor: '#7C8185',
        titleColor: '#242F39',
        cardParamsColor: '#5F676E',
        paramsBgColor: '#f0f0f0',
        cardBg: '#E9EAEB',
      },
    },
  },
  plugins: [],
};
