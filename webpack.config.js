const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./public/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./public/build"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};
