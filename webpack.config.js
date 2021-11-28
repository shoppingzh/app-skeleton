const  HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'app-skeleton'
    })
  ]
}
