const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    html: './index.html',
    js: './index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  // plugins: [
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ]
};
