module.exports = {
  content: ["./docs/*.html"],
  theme: {
    fontFamily: {
      'display': ['Commissioner'],
      'body': ['"Commissioner"'],
    },
    fontSize: {
      sm: '16px',
      base: '24px',
      md: '18px',
      lg: '20px',
      xl: '36px',
      '2xl': '48px',
    },
    extend: {
      lineHeight: {
        'base': '1.2',
      },
      colors: {
        'background': '#fff',
        'backgroundBlue': '#F6FAFF',
        'backgroundFooter': '#0A2530',
        'base': '#000000',
        'primary': '#FAE01A',
        'yellow-opacity': '#FFF7BE',
        'secondary': '#018FA3',
        'blue-opacity': '#95D8E0',
        'third': '#955EEA',
        'fourth': '#4ECA30',
        'fifth': '#FFE41B',
        'sixth': '#FF4D94',
        'seventh': '#FFA724',
      },
    },
  },
  plugins: [],
}

