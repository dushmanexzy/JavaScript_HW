const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');

module.exports = [{
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: extractCSS.extract(['css-loader', 'postcss-loader'])
    }]
  },
  plugins: [
    extractCSS
  ]
}];