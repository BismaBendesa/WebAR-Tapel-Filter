// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", ...defaultTheme.fontFamily.sans], // 'custom' is your utility class name
      },
    },
  },
  plugins: [],
};
