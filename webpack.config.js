const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const Webpack = require('webpack')

const VueLoaderPlugin = require('vue-loader/lib/plugin')      

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
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, use: 'babel-loader' },
      { test: /\.(jpg|png|gif|svg)$/, use: {
        loader: 'url-loader',
        options: {
          limit: 80360,
          name: '[hash:7]-[name].hwq'
        }
      } }
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
    new VueLoaderPlugin(),                          // vue-loade@15.x版本需要添加此插件才有效
    new HtmlWebpackPlugin({                     
      title: 'Hello World',
      template: './src/index.html' //模板地址
    })
  ]
}

module.exports = config