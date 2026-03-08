const path = require('path');

module.exports = {
  content: [
    path.join(__dirname, 'src', '**', '*.{js,jsx,ts,tsx}'),
    path.join(__dirname, 'index.html'),
  ],
  darkMode: 'class',
  theme: { extend: {} },
  plugins: [],
}