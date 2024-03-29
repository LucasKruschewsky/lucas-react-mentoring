const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      Root: path.resolve(__dirname, '../src'),
      Images: path.resolve(__dirname, '../src', 'images'),
      Components: path.resolve(__dirname, '../src', 'components'),
      Global: path.resolve(__dirname, '../src', 'global'),
    };
    return config;
  },
};
