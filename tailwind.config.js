module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgBlue: {
          DEFAULT: '#0F1017',
        },
        textColor: {
          light: '#DBDBDB',
          DEFAULT: '#FFFFFF',
          gray: '#AEAEAE',
          dark: '#BEBAF5',
        },
        card:{
          DEFAULT: '#232732',
        },
      },
      borderWidth: {
        '1': '1px',
      },
      width: {
        '200': '700px',
        '400': '1080px',
        '800': '1230px',
      },
      height: {
        '1': '1px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
