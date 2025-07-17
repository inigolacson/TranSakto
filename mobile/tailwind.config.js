/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        headerColor: '#E2E2E2',
        subheaderColor: "#C2C1C0",
        tempBlack: '#161616',
        buttonOrange: 'rgba(244, 124, 83, 0.6)'
      },
      fontFamily: {
        inter: ['Inter'],
        'inter-italic' : ['Inter-Italic'],
        ron: ['Ronzino-Regular'],
        'ron-medium': ['Ronzino-Medium'],
        'ron-bold':['Ronzino-Bold'],
        'ron-oblique': ['Ronzino-Oblique'],
        'ron-medium-oblique': ['Ronzino-MediumOblique'],
        'ron-bold-oblique': ['Ronzino-BoldOblique'],
      }
    },
  },
  plugins: [],
}


// Tailwind Class      | Numeric Weight | Description
// --------------------|----------------|--------------------------
// font-thin           | 100            | Thin
// font-extralight     | 200            | Extra Light (Ultra Light)
// font-light          | 300            | Light
// font-normal         | 400            | Normal (Regular)
// font-medium         | 500            | Medium
// font-semibold       | 600            | Semi Bold (Demi Bold)
// font-bold           | 700            | Bold
// font-extrabold      | 800            | Extra Bold (Ultra Bold)
// font-black          | 900            | Black (Heavy)