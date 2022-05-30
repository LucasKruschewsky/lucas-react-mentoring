const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
require('babel-plugin-styled-components');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Root: path.resolve(__dirname, 'src'),
      Images: path.resolve(__dirname, 'src', 'images'),
      Components: path.resolve(__dirname, 'src', 'components'),
      Global: path.resolve(__dirname, 'src', 'global'),
    },
  },
  externalsPresets: { node: true },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            '@babel/preset-react',
            [
              '@babel/env',
              {
                targets: {
                  browsers: ['last 2 versions'],
                },
              },
            ],
          ],
          plugins: ['babel-plugin-styled-components'],
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
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, 'src')],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
