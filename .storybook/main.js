module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "@storybook/addon-controls"
  ],
  "framework": "@storybook/react",
  features: { emotionAlias: false },
  previewHead: (head) => (` ${head} <style> html { font-size: 62.5%; } </style> `)
}
