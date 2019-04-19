/* eslint-disable */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成入口文件dist/index.html
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 乱码，缩小
const ExtractTextPlugin = require("extract-text-webpack-plugin") // css单独放在一个文件中
const webpack = require('webpack')
const HtmlWebpackPluginConfig={
  title: 'hello, webpack', // html5文件中<title>部分
  filename: 'front.html', // 默认是index.html，服务器中设置的首页是index.html，如果这里改成其它名字，那么devServer.index改为和它一样，最终完整文件路径是output.path+filename，如果filename中有子文件夹形式，如`./ab/cd/front.html`，只取`./front.html`
  template: '../src/template/index.html', //如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
  inject:true, // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
}
module.exports = {
  context: path.resolve(__dirname,'../src'),
  entry: './main', //main.js中的.js可以省略，前面的./不能省
  output:{
    path:path.resolve(__dirname,'../dist'),
    filename:'./[name].js' // dist文件夹不存在时，会自动创建
  },
  module: {        
    rules: [       
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: true
            }
          },
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
        ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'], //扩展名为.js,.vue,.json的可以忽略，如 import App from './app'，先在当前目录中找app.js，没有再找app.vue，没找到，再找.json，如果还没找到，报错
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 别名，这是一个正则的写法，表示以vue结尾的，如import Vue from 'vue' 表示 import Vue from 'vue/dist/vue.esm.js'
      '@': path.resolve('src'),// 这也是为懒人服务的,import HelloWorld from '@/components/HelloWorld'这里的@其实就是代表src这个目录 
      '#': path.resolve('src/ui/components') // import Table from '#/table'
    }
  },
  plugins: [
    new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
    // new UglifyJsPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({BJ: JSON.stringify('北京'),}) // 内置插件，无须安装，可以理解为它是webpack实例的一个方法，该插件相当于apache等web服务器上定义一个常
  ],
  
  devServer: {
    contentBase: path.join(__dirname, "../dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
    port: 9000, //端口改为9000
    open:true,// 自动打开浏览器，适合懒人
    index: 'front.html',
    inline:true,
    hot:false,
    compress:true //压缩
  }
}