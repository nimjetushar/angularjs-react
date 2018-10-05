const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  path = require("path"),
  rootDir = path.resolve(__dirname, ".."),
  port = require("../config.json").port;

module.exports = webpackMerge(commonConfig, {
  devtool: "cheap-module-eval-source-map",
  mode: "development",

  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: `http://localhost:${port}/`,
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },

  devServer: {
    inline: true,
    port: port,
    historyApiFallback: true,
    stats: "minimal"
  }
});
