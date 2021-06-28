const CSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const HTMLLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const JSXLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  resolve: { extensions: ['.js', '.jsx'] },
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};

const CSSLoader = {
  test: /\.css$/,
  use: [
    {
      loader: CSSExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
        hmr: true,
      },
    },
    'css-loader',
    'postcss-loader',
  ],
};

const MEDIALoader = {
  test: /\.(png|jpe?g|gif|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'images',
      },
    },
  ],
};

const FONTSLoader = {
  test: /\.(woff|woff2|ttf|otf|eot)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'fonts',
      },
    },
  ],
};

const PRODCSSLoader = {
  test: /\.css$/,
  use: [
    {
      loader: CSSExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
        hmr: false,
      },
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
    'postcss-loader',
  ],
};

module.exports = {
  HTMLLoader,
  JSXLoader,
  CSSLoader,
  MEDIALoader,
  FONTSLoader,
  PRODCSSLoader,
};
