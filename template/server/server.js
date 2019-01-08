const opn = require('opn');
const path = require('path');
const express = require('express');
const fs = require('fs');
const apiMocker = require('webpack-api-mocker');
const chalk = require('chalk');

const config = require('../build/config');
const server = config.build.server;

const {
  getPageEntries
} = require('../build/utils');
const {
  entryPagePath
} = require('../build/config');

const app = express();

apiMocker(app, path.resolve('../mock/index.js'));

// default port where dev server listens for incoming traffic
const port = process.env.PORT || server.serverPort;
const proxyTable = config.dev.proxyTable;

const mocker = path.resolve('../mock/index.js');



// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// 走静态资源
// serve pure static assets
const staticPath = path.posix.join(config.build.assetsPublicPath, config.build.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

// 默认打开index.html ，如果没有，打开home.html
const file = server.openPage || config.dev.openPage; // or 'home.html'

// 入口文件, 配置页面路由
const {
  pageFiles
} = getPageEntries(entryPagePath);

let _pageFiles = pageFiles.concat(['index', 'download', 'phone','rules']);
console.log(_pageFiles,'-----------pageFiles');


if (_pageFiles != null) {
  _pageFiles.map(item => {
    app.get(`/${item}.html`, (req, res) => {
      res.sendFile(path.resolve(__dirname, `${item}.html`));
    });
  });
}


const uri = `http://localhost:${port}/${file}` ;

console.log('> Starting server...');
opn(uri);
console.log(chalk.bgBlue('> Listening at ' ,chalk.underline.bgRed(uri + '\n')));

apiMocker(app, mocker, proxyTable);


app.listen(port);

