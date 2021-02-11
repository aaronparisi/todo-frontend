var path = require('path')

module.exports = {
  entry: './todo_redux.jsx',
  output: {
    path: path.join(__dirname, '../backend/app/assets/javascripts'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader"
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}