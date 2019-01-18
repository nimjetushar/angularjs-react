const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  path = require("path"),
  rootDir = path.resolve(__dirname, ".."),
  port = require("../config.json").port;

module.exports = (mode) => {
  return webpackMerge(commonConfig(mode), {
    devtool: "cheap-module-eval-source-map",
    mode: "development",

    output: {
      path: path.resolve(rootDir, "dist"),
      publicPath: `http://localhost:${port}/`,
      filename: "[name].js",
      chunkFilename: "[name].chunk.js"
    },

    devServer: {
      inline: true,
      port: port,
      historyApiFallback: true,
      stats: "minimal"
    }
  });
}