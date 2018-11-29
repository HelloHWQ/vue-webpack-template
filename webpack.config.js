const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const Webpack = require('webpack')

var config = {
  entry: {                     // 入口文件地址
    main: path.join(__dirname, './src/main.js')
  },
  output: {                    // 打包输出目录
    filename: 'bundle.js',
    path: path.join(__dirname, './dist/')
  },
  module: {                    // 第三方loader的配置
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  devServer: {                 // webpack-dev-server 相关配置
    contentBase: path.resolve(__dirname, './src'),
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
  },
  plugins: [                   // 第三方插件
    new Webpack.HotModuleReplacementPlugin(),       // webpack4.x 需要启用这个插件才能实现热更新
    new HtmlWebpackPlugin({                     
      title: 'Hello World',
      template: './src/index.html' //模板地址
    })
  ]
}

module.exports = config