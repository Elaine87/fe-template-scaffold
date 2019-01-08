/**
 * Created Date: 2018-11-07, 1:59:21 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */


/**
 *
 * output: path 预设的文件夹是dist ,
 */


module.exports =  {
  // 入口文件路径，可根据项目修改，建议为src
  entryPagePath: '../src/pages',
  dev:{
    host: 'localhost',
    port: 9000,
    soureMap: '#cheap-module-eval-source-map',
    autoOpenBrowser: true,
    assetsRoot:'../dist',
    assetsPublicPath:'/',
    env:{
      NODE_ENV: 'development'
    },
    proxyTable: {
      '/api': '',
      '/repos': ''
    },
    // 文件相对于项目根目录，只需要填写名称即可
    openPage: 'home.html'
  },
  build:{
    env:{
      NODE_ENV: 'production'
    },
    assetsRoot:'../dist',
    server:{
      serverRoot: '../server',
      serverPort: 8000,
      openPage: 'home.html',
    },
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    copyDir:['../static'],
    bundleAnalyzerReport: false,
    soureMap: true,
    zip: true,
    cssChunkFuleName: 'styles',
    // bundleAnalyzerReport: process.env.agrs
  }
}
