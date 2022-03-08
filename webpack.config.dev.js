const path = require('path');
const { merge } = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// Interactive UI at port 8888
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common');

const smp = new SpeedMeasurePlugin();

const mergedConfig = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: '[name]-sourcemap.js',
    clean: true,
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin({ openAnalyzer: false }), new Dotenv()],
});

module.exports = smp.wrap(mergedConfig);
