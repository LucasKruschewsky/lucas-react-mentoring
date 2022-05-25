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
    path: path.resolve(__dirname, 'build', 'public'),
    filename: 'client_bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules', 'react-toastify', 'dist'),
        ],
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin({ openAnalyzer: false }), new Dotenv()],
});

module.exports = smp.wrap(mergedConfig);
