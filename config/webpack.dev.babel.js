const defaultConfig = require('ss-clean-webpack/src/webpack.dev.babel');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = process.cwd();
const path = require('path');

const config = (env) => {
  const newConfig = defaultConfig(env);
  newConfig.entry =  [
    path.resolve(root, 'src/projectFiles/src'),
  ];
  newConfig.plugins = [
    new HtmlWebpackPlugin({ template: 'src/projectFiles/src/index.html'}),
  ];
  return newConfig
};

module.exports = config;
