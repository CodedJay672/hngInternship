const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test:/\.css$/i,
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|svg|jpg|gif)$/i,
        type:'asset/resource',
      },
      {
        test: /\.html$/i,
        use: ['html-loader']
      }
    ]
  },
  resolve: {
    extensions: [".*", ".js", ".jsx"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ]
}