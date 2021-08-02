const path = require("path");

module.exports = {
  mode: "production",
  entry: "./paginate.js",
  output: {
    path: path.resolve("./"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  externals: {
    react: "react",
  },
};

module.exports = {
  mode: "production",
  entry: "./muipaginate.js",
  output: {
    path: path.resolve("./"),
    filename: "mui.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ],
  },
  externals: {
    react: "react",
  },
};