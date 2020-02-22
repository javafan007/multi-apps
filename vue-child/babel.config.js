const presets = [
  ['@babel/preset-env', {
    modules: false,
    targets: {
      chrome: '57',
      safari: '12',
    },
  }]
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = {
  presets,
  plugins,
};
