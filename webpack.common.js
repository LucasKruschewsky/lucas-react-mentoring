const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    symlinks: false,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Root: path.resolve(__dirname, 'src'),
      Images: path.resolve(__dirname, 'src', 'images'),
      Components: path.resolve(__dirname, 'src', 'components'),
      Global: path.resolve(__dirname, 'src', 'global'),
    },
  },
  output: {
    assetModuleFilename: 'images/[name][ext]',
    publicPath: '/build/public',
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
            plugins: ['babel-plugin-styled-components'],
          },
        },
      },
      {
        test: /\.?(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
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
