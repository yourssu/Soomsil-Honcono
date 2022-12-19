const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[chunkhash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_module/,
        use:{
            loader: 'babel-loader',
            options: {
              extends: path.resolve(__dirname, 'babel.config.js'),
            },
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './public/index.html'
    })
  ]
}