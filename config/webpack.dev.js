const path = require('path'),
  webpackMerge = require('webpack-merge'),
  port = require('../config.json').port,
  commonConfig = require('./webpack.common.js'),
  rootDir = path.resolve(__dirname, '..');

module.exports = (mode) => {
  return webpackMerge(commonConfig(mode), {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',

    output: {
      path: path.resolve(rootDir, 'dist'),
      publicPath: `http://localhost:${port}/`,
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },

    devServer: {
      inline: true,
      port,
      historyApiFallback: true,
      stats: 'minimal'
    }
  });
};
