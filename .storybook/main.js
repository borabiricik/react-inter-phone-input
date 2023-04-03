// .storybook/main.js

module.exports = {
  addons: ['@storybook/addon-essentials'],
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.@(js|ts|tsx|jsx|mdx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },
};
