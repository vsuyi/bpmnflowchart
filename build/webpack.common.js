const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    library: 'bpmnflowchart',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
    filename: 'bpmnflowchart.js'
  },
  externals: {
    zrender: {
      commonjs: 'zrender',
      commonjs2: 'zrender',
      amd: 'zrender',
      root: 'zrender'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
