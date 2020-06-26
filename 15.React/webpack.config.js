const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'build.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
        {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          }
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'build.css' })
  ]
};