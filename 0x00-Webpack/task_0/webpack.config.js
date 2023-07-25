const path = require('path');

module.exports = {
  mode: 'development', // Add this line to set the mode
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
