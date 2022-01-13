const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    publicPath: '/',
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "images"),
          to: "images",
        },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3006,
    historyApiFallback: true,
    open: true,
    hot: true
  },
};
