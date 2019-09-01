var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var dir = path.resolve('./');
module.exports = {
  mode: "development", //加上这一句试试
  entry: './src/index.js',  //webpack进行处理的文件
  output: {
    path: dir,            //输出的路径
    filename: 'dist/[name]_[hash].js', //webpack输出的文件
    chunkFilename: 'dist/[name].[chunkhash:5].chunk.js',
    // publicPath: 'http://dev.rnd.gegee.cc/cms-web/'
    publicPath: 'http://gegee.cc/'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader','less-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-2'],
            plugins: [
              "transform-runtime",
              "transform-decorators-legacy",
              "syntax-dynamic-import",
              "mobx-deep-action",
              ["import", [{ libraryName: "antd", style: 'css' }]]
            ],
          }
        }
      },
      {
        　　test: /\.(png|jpg)$/,
        　  use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=img/&publicPath=./',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './template.html',
      inject: 'body'
    })
  ]
}