// shared config (dev and prod)
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CSSPlugin = require("@modular-css/webpack/plugin");

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loaders: [
		  "@modular-css/webpack/loader"
        ],
      },
    ],
  },
  plugins: [
		new HtmlWebpackPlugin({template: 'index.html.ejs',}),
		new CSSPlugin({ css  : "./output.css", json : "./output.json" })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};
