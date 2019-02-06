const webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  path = require("path"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = mode => {
  return {
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
            !mode ?
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
      new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], { allowExternal: true }),
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
          from: path.resolve(__dirname, "../src/partialViews/**/*.html"),
          to: ""
        }], {}
      )
    ],

    optimization: {
      splitChunks: {
        chunks: "all",
        maxAsyncRequests: 5,
        minChunks: 1
      },
      mergeDuplicateChunks: true
    },

    stats: {
      warnings: false
    }
  }
};