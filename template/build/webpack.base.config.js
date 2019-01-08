/**
 * Created Date: 2018-11-06, 2:09:22 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */

const path    = require('path');
const webpack = require('webpack');
const chalk   = require('chalk');

const {
  getPageEntries
} = require('./utils');
const {
  entryPagePath,
  dev
} = require('./config');

// 开发环境
const mode = process.env.NODE_ENV || 'development';

// 入口文件
let {
  pagesEntries
} = getPageEntries(entryPagePath);

if (pagesEntries == null) {
  console.error(chalk.red('入口文件为空'));
  return;
}

module.exports = {
  mode: mode,
  // entry: path.join(__dirname, '../src/main.js'),
  entry: {
    ...pagesEntries
  },
  output: {
    path: path.resolve(__dirname, dev.assetsRoot),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [

      // html-loader
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            /* ... */
            minimize: false,
            interpolate: false
            //default attrs=img:src or set false to disable all img attr or set custom attr
            // attrs: [':data-src']
          }
        }]
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|server)/,
        include: [path.resolve('src'), path.resolve('config')],
        options: {
          "plugins": ["syntax-dynamic-import"],
          "presets": [
            ["env", {
              "modules": false
            }]
          ]
        }
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]',
          fallback: 'file-loader' //default
        }
      },
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'url-loader',
        include: [path.resolve('static'), path.resolve('src')],
        options: {
          limit: 10000,
          name: 'static/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.jsx', '.ts', '.tsx'],
    alias: {
      /**
       * 根据项目目录结构，自行配置
       */
      '@': path.resolve('../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'static': path.resolve(__dirname, '../static'),
      'util': path.resolve(__dirname, '../src/util')
    }
  },
  performance: {
    hints: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(mode)
      }
    })

    // 以下配置，请按项目需要进行打开配置

    // 设置全局变量 ,如需开启，打开自行配置
    // new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    // }),

  ],
  // 设置cdn等情况引入，相当于shim import，如需开启，打开自行配置
  // externals:{
  //     '_': 'lodash',
  // },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
};
