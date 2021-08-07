const path = require('path');

module.exports = async ({ config, _ }) => {
  config.module.rules.push({
    test: /\.vue$/,
    loader: require.resolve('vue-loader'),
    include: path.resolve(__dirname, '../'),
  });
  return config;
};
