const webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    polyfills: "./polyfills.js",
    vendor: "./vendor.js",
    app: "./src/app.js"
  },

  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader"
          },
          {
            loader: "angularjs-template-loader?relativeTo:" +
              path.resolve(__dirname, "../src")
          }
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production" ?
          "style-loader" :
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader?name=pubic/fonts/[name].[ext]"
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Input FileName
      filename: "./index.html" // Output FileName
    }),
    new webpack.ProvidePlugin({}),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new CopyWebpackPlugin(
      [{
        from: path.resolve(__dirname, "../src/partialViews/*"),
        to: ""
      }], {
        ignore: ['*.js', '*.css']
      }
    )
  ],

  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },

  stats: {
    warnings: false
  }
};