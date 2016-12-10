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
      }
    ]
  }
};
