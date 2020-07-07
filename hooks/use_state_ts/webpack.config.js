const path = require('path');

module.exports = {
  // entry: ['babel-polyfill', './src/app.js'], //no need for babel-polyfill since we dont use babel
  entry: ['./src/index.tsx'],
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      /* {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, */
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      // addition - add source-map support
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // devtool: 'cheap-module-eval-source-map',
  // addition - add source-map support for ts
  devtool: 'source-map',
  devServer: {
    contentBase: './public',
    port: 3000,
  },
};
