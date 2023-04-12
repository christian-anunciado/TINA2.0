/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Roboto', // <-- Roboto is a default sans font now
  'Open Sans',
  'sans-serif',
  'system-ui',
  // <-- you may provide more font fallbacks here
];
fontFamily['text'] = [
  'Noto Sans',
  'Roboto', // <-- Roboto is a default sans font now
  'Open Sans',
  'sans-serif',
  'system-ui',
]

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: fontFamily,

    extend: {
      colors: {
        transparent: 'transparent',
        white: '#fff',
        blueBorder: '#3ea6ff',
        blueSoft: '#def1ff',
        darkBlueSoft: '#263850',
        divider: '#ebebeb',
        darkDivider: '#333333',

        // Dark
        darkBgLight: '#212529',
        darkBgLighter: '#202123',
        darkText: 'white',
        darkTextSoft: '#aaa',
        darkSoft: '#33383f',

        // Light
        bgLight: '#f9f9f9',
        bgLighter: 'white',
        text: 'black',
        textSoft: '#606060',
        soft: '#f3f3f3',

        // Primary
        primaryGold: '#f8c400',
        primaryLightGold: '#ffdf16',


        // red: '#8c383e',
        red: '#791b1b',
        redLight: '#8c383e',
        // redLight: '#8a343b',

        gold: '#e7ae4d',
        goldLight: '#E4C988',


      },
      backgroundImage: {
        'cit-pattern': "url('./src/assets/img/CITLogo.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
