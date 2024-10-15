
module.exports = {
  content: [
      "./docs/*.{html,js}",
      "./src/**/*.{ts,tsx}",
      "./src/**/*.{png}"
  ],
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
        'black': '#000000',
        'primary': 'rgb(var(--color-primary))',
        'yellow-opacity': 'rgb(var(--color-primary-light))',
        'secondary': 'rgb(var(--color-secondary))',
        'blue-opacity': 'rgb(var(--color-secondary-light))',
        'third': '#955EEA',
        'fourth': '#4ECA30',
        'fifth': '#FFE41B',
        'sixth': '#FF4D94',
        'seventh': '#FFA724',
      },
      textShadow: {
        'secondary': '-31px -25px rgba(var(--color-secondary), 0.07)'
      },
      flexBasis: {
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
      }
    },
  },
  plugins: [],
}

