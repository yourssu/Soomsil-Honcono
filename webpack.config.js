const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[chunkhash].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "Pages": path.resolve(__dirname, 'src/pages/'),
      "Containers": path.resolve(__dirname, 'src/containers/'),
      "Components": path.resolve(__dirname, 'src/components/'),
      "Apis": path.resolve(__dirname, 'src/apis/'),
      "Types": path.resolve(__dirname, 'src/types/'),
    },
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
      template: './public/index.html',
    }),
    // new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({ analyzerMode: 'static' }),
  ],
  devServer: {
    historyApiFallback: true,
  }
}