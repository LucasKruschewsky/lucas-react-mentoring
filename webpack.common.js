const path = require('path');
require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    extensions: ['.js', '.jsx'],
    symlinks: false,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Images: path.resolve(__dirname, 'src', 'images'),
      Components: path.resolve(__dirname, 'src', 'components'),
    },
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        include: path.resolve(__dirname, 'src', 'images'),
        type: 'asset/resource',
      },
      {
        test: /\.svg$/i,
        include: path.resolve(__dirname, 'src', 'images'),
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new Dotenv(),
  ],
};
