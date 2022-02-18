const path = require('path');
const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const common = require('./webpack.common');

const smp = new SpeedMeasurePlugin();

const mergedConfig = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dev'),
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

module.exports = smp.wrap(mergedConfig);
