const webpack = require('webpack')
const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const cleanPlugin = require('clean-webpack-plugin')

function resolve(dir, filename = '') {
  return path.join(__dirname, dir, filename)
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // 支持 js 和 jsx
        loader: 'babel-loader'
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  // 代码模块路径解析的配置
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],

    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx']
  },
  plugins: [new UglifyPlugin(), new cleanPlugin([resolve('dist')])]
}
