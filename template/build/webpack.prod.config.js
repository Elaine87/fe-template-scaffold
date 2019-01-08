/**
 * Created Date: 2018-11-07, 1:52:06 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */

const merge                = require('webpack-merge')
const webpack              = require('webpack')
const CleanWebpackPlugin   = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin    = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const UglifyJsPlugin       = require('uglifyjs-webpack-plugin');
const path                 = require('path');
const vConsolePlugin       = require('vconsole-webpack-plugin');

const baseWebpackConfig                      = require('./webpack.base.config')
const config                                 = require('./config.js');
const { getEntriesPageHtml, getPageEntries } = require('./utils');


// 获取入口文件名
let { pageFiles, pagesEntries } = getPageEntries(config.entryPagePath);
let entryHtmlPage = getEntriesPageHtml(pageFiles, 'production');

// 根据入口文件，生成模板html

const prodWebpackConfig = merge(baseWebpackConfig, {
  entry:{
    ...pagesEntries
   },
  // #source-map : When using the uglifyjs-webpack-plugin you must provide the sourceMap: true option to enable SourceMap support.
  devtool: config.build.soureMap ? '#source-map' : none,
  mode: 'production',
  output:{
    path: path.resolve(__dirname, config.build.assetsRoot),
    filename: path.join(config.build.assetsSubDirectory,'js/[name].[hash:7].js'),
    chunkFilename: path.join(config.build.assetsSubDirectory,'js/[name].[chunkhash:7].js'),
  },
  module:{
    rules:[
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins:[

    // 清除打包，多入口，需要明确指定配置
    new CleanWebpackPlugin(['dist'], {
        root: path.resolve(__dirname, '../'),
        verbose: true,
         // Good for not removing shared files from build directories.
         // TODO: for multiple page
        exclude: [ 'files', 'to', 'ignore' ],
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new MiniCssExtractPlugin({
      filename: path.join(config.build.assetsSubDirectory, 'css/[name].[contenthash:7].css'),
      chunkFilename:  path.join(config.build.assetsSubDirectory, 'css/[name].[contenthash:7].css'),
    }),

    // 不需要编译的代码部分，通过copy 插件直接复制到生产目录
    new CopyWebpackPlugin([{
        from: 'static',
        // to: '../dist/static'
        to:  path.join( config.build.assetsRoot ,config.build.assetsSubDirectory),
    }
  ]),
    ...entryHtmlPage
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        sourceMap: true,
        parallel: true,
        uglifyOptions:{
            mangle: true,
            compress:{
                drop_console: true,
                drop_debugger: true
            }
        }
      }),
      new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true,
                soureMap: true
            }
        })
    ],

    // wbpack运行时文件缓存
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
           // 所有通过node_module 安装,引用超过1次的模块，打包到vendors 中
          // TODO: 也可以自行根据entry入口中的vendors数组设置下面的vendors 模块，比如使用vue或者react的时候
          vendors: {
              name: 'vendors',
              chunks:  'async',
              // filename: path.join(config.build.assetsSubDirectory , 'js/[name].[chunkhash:7].js'),
              test: /node_modules\/(.*)\.js/,
              priority: 21,
              enforce: true,
              minChunks: 2,
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            enforce: true,
            priority: 20
          }
      }
    }
  }
})

// 打包分析, 如果 开启，设置config.build.bundleAnalyzerReport = true
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  prodWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

if(process.env.NODE_ENV == 'DEBUG'){
  prodWebpackConfig.plugins.push(
    new vConsolePlugin({
        filter: [],  // 需要过滤的入口文件
        enable: true // 发布代码前记得改回 false
    }),
  )
}

module.exports = prodWebpackConfig

