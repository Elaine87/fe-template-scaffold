/**
 * Created Date: 2018-11-07, 1:51:56 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */
const merge = require('webpack-merge');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseWebpackConfig = require('./webpack.base.config');
const apiMocker = require('webpack-api-mocker');
const path = require('path');


// 获取最后一个执行参数，可以是 自定义参数，比如 npm run dev mock ，可以使用本地mock 数据
const enviromentArg = process.argv[process.argv.length - 1];
const config = require('./config');
const chalk = require('chalk');
const {
  getPageEntries,
  getEntriesPageHtml
} = require('./utils');

const host = process.env.HOST || config.dev.host;
const port = process.env.PORT || config.dev.port;

// 获取入口文件名
let {
  pageFiles
} = getPageEntries(config.entryPagePath);
let entryHtmlPage = getEntriesPageHtml(pageFiles, 'development');

// console.log('------------------------------------entryHtmlPage---start');
// console.log(JSON.stringify(entryHtmlPage));
// console.log('------------------------------------entryHtmlPage---end');

const devWebpackConfig = merge(baseWebpackConfig, {
  //cheap-module-eval-source-map seped :build: o & rebuild:++ production:no
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      /**
       * css loaders
       */
      {
        test: /\.(sc|sass|le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
        // loader: MiniCssExtractPlugin.loader +'!style-loader!css-loader!sass-loader!less-loader',
      }
    ]
  },

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: config.dev.host,
    port: config.dev.port,
    open: config.dev.autoOpenBrowser,
    quiet: true,
    // publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    before: function (app, server) {
      // npm run dev mock 添加mock 参数即可使用本地mock数据
      // 使用本地mock数据,可以部分接口仍然使用proxy,方便处理apiMocker(app, mocker[,proxy]);
      // const proxyOption = config.dev.proxyTable;
      const proxyOption = {
        proxy: config.dev.proxyTable,
        changeHost: true,
        // modify the http-proxy options
        httpProxy: {
          options: {
            ignorePath: true,
          },
          listeners: {
            proxyReq: function (proxyReq, req, res, options) {
              console.log('proxyReq');
            },
          },
        },
      };

      const mocker = path.resolve('./mock/index.js');
      apiMocker(app, mocker, proxyOption);

    },
    noInfo: true,
    overlay: true,
    stats: 'errors-only',
    watchOptions: {
      poll: true
    },
    watchContentBase: true,

    // 默认打开页面
    openPage: config.dev.openPage
  },
  plugins: [
    ...entryHtmlPage,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[id].css'
    }),
    // console 更方便查看
    // new DashboardPlugin(dashboard.setData),
  ]
});

module.exports = new Promise((resolve, reject) => {

  console.log(chalk.red(`Your application is running here: `) + chalk.green(`http://${host}:${port}`));

  resolve(devWebpackConfig);
});
