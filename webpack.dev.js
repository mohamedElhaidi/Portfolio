const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge"); //to merge common config with this config

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js", //[name]comes from name of entry point
    path: path.resolve(__dirname, "public"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "skillsAnimation.html",
      template: "./src/html/skillsAnimation.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "resolve-url-loader", // helps with resolving urls inside scss files
          },
          {
            loader: "sass-loader",
            options: {
              webpackImporter: false, // <=== important for the
              sourceMap: true, // <-- !!IMPORTANT!! for the resolve-url-loader to work properly
            },
          },
        ],
      },
    ],
  },
});
