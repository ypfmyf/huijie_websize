const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
 
module.exports = {
    mode:'production',
    entry: {
        bundle: path.resolve('./src/index.js'),
        //添加要打包在vendor里面的库
        //vendors: ['react','react-dom','react-router'],
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name][hash].js'
    },
    module: {
      rules: [
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
              test: /\.(css|less)$/,
              use: ['style-loader', 'css-loader','less-loader']
          },
         {
              test: /\.(png|jpg|gif)$/,
              use: 'url-loader?limit=1024&name=[path][name].[ext]&outputPath=/image/&publicPath=./src/',
          }
      ]
  },
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
    },
    // devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({//设置成production去除警告
            'process.env':{
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template.html', 
            inject: 'body' 
        }),
        // new CleanWebpackPlugin(['dist',
        //     'build'], {
        //     root:__dirname,
        //     verbose: true,
        //     dry: false,
        //     exclude: ['jslibs']
        // })
    ]
};