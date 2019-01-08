/**
 * Created Date: 2018-11-14, 4:34:48 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */

// inline-eslint -configuration


//  构建工具常用 函数
const fs                = require('fs');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const chalk             = require('chalk');
const config            = require('./config');

module.exports = {

  getPageEntries(pagePath) {
    // 入口文件夹路径
    let entryPagePath = path.resolve(__dirname, pagePath);

    let pageFiles    = fs.readdirSync(entryPagePath);
    let pagesEntries = {};

    if (!pageFiles) {
      pagesEntries = null;
      pageFiles = null;
      console.error(chalk.red('文件夹为空'));
    } else {
      pageFiles.map((item) => {
        pagesEntries[item] = path.join(entryPagePath, item, '?query=a');
      });
    }
    return {
      pagesEntries,
      pageFiles
    };
  },
  /**
   *
   *
   * @param {Array} pageFiles ,入口文件名数组
   * @param {String} mode, 当前开发 环境
   * @returns {Object} 入口文件模板
   */
  getEntriesPageHtml(pageFiles, mode) {
    var mode = mode || 'development';

    let entryHtmlPage = [];

    if (pageFiles !== null) {

      pageFiles.map((item) => {
        let htmlConfig = null;
        let devHtmlConfig = {
          title: item,
          filename: `${item}.html`,
          template: path.join(__dirname, `${config.entryPagePath}/${item}/index.html`),
          inject: 'body',
          chunks: ['commons', 'manifest', `${item}`],
          // favicon: path.resolve(__dirname,'../static/favicon.ico'),
          viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no'
        };

        if (mode == 'production') {
          htmlConfig = {
            ...devHtmlConfig,
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency',
            chunks: ['commons', 'manifest', `${item}`]
          };
        } else {
          htmlConfig = devHtmlConfig;
        }

        entryHtmlPage.push(
          new HtmlWebpackPlugin(htmlConfig),
        );
      });
    }
    return entryHtmlPage;
  }
};
