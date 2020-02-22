const presets = [
  ['@babel/preset-env', {
    modules: false,
    targets: {
      chrome: '57',
      safari: '12',
    },
  }],
  '@babel/preset-react',
];

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = {
  presets,
  plugins,
};
