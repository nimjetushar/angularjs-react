const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  path = require("path"),
  rootDir = path.resolve(__dirname, "..");

module.exports = mode => {
  return webpackMerge(commonConfig(mode), {
    mode: "production",
    output: {
      path: path.resolve(rootDir, "dist"),
      publicPath: "./",
      filename: "[name].js",
      chunkFilename: "[name].chunk.js"
    },
    plugins: [new OptimizeCSSAssetsPlugin({})]
  });
}