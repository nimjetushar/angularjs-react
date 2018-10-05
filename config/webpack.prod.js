const webpackMerge = require("webpack-merge"),
  commonConfig = require("./webpack.common.js"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  path = require("path"),
  rootDir = path.resolve(__dirname, ".."),
  CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  output: {
    path: path.resolve(rootDir, "dist"),
    publicPath: "./",
    filename: "[name].js",
    chunkFilename: "[id].chunk.js"
  },
  plugins: [new CleanWebpackPlugin(["dist"]), new OptimizeCSSAssetsPlugin({})]
});
