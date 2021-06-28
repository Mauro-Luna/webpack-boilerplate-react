const path = require('path');
const CSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const loaders = require('./loaders.config');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      loaders.JSXLoader,
      loaders.PRODCSSLoader,
      loaders.HTMLLoader,
      loaders.MEDIALoader,
      loaders.FONTSLoader,
    ],
  },
  plugins: [
    new CSSExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[name].[id].css',
      ignoreOrder: false,
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
