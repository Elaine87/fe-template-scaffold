/**
 * Created Date: 2018-11-19, 4:18:35 pm
 * Author: panmin
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) 2018 蘑菇智行
 * ------------------------------------
 * Make it Work, Make it Right, Make it Fast.
 */

// 为了方便打包后的压缩和静态文件预览，使用这种js方式进行打包

const path       = require('path');
const chalk      = require('chalk');
const webpack    = require('webpack');
const ora        = require('ora');          //loading
const fse        = require('fs-extra');     //node.js fs , promisify
const gzipFolder = require('gzip-folder');  //gzip 压缩
const exaca      = require('execa');        // 以promise方式执行shell

const spinner           = ora();
const prodWebpackConfig = require('./webpack.prod.config.js');
const config            = require('./config');
// const vfs               = require('vinyl-fs'); // like gulp usage
// const through           = require('through2'); // wrap node.js stream methods


// dist directory
const assetsRootPath = path.join(__dirname, config.build.assetsRoot);




spinner.start('building for production...\n');



fse.remove(assetsRootPath, err => {
  if (err) throw err;
  console.log(chalk.red(`${config.build.assetsRoot} has been removed!`));
  webpack(prodWebpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'));

    const copyLog = ()=> {
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
    }
    //
    // try {


    //   const assetRootName = path.basename(path.resolve(config.build.assetsRoot));
    //   const absoluteAssetsRootPath = path.resolve(__dirname ,config.build.assetsRoot);

    //   /**
    //    * zip 压缩打包后的文件
    //    *
    //   **/
    //   exaca.shellSync(`zip -v -r ${assetRootName}.zip ${absoluteAssetsRootPath}`);

    // } catch (error) {
    //   console.log(chalk.red(`error: ${error}`));
    // }


    // /**
    // **   copy dist/* to server
    // **  child_process 中执行  node server.js
    // **/
    // fse.copy(assetsRootPath, path.join(__dirname, config.build.server.serverRoot))
    //   .then(() => {

    //     // 把工作目录切换到server
    //     try {
    //       const serverPath = path.resolve(__dirname, config.build.server.serverRoot);
    //       process.chdir(serverPath);
    //       console.log(chalk.cyan(`\nNew directory: ${process.cwd()}\n`));
    //       (async () => {
    //         const {
    //           stdout
    //         } = await exaca.shell('node server.js');
    //         console.log('stdout: %s', stdout);
    //       })()
    //     } catch (err) {
    //       console.error(chalk.red(`chdir: ${err}`));
    //       // 若copy 出错，仍然按原来的提示
    //       copyLog();
    //     }

    //     console.log(chalk.cyan('success!'));
    //   })
    //   .catch(err => {
    //     console.error(chalk.red(err));
    //     copyLog();
    //   });


  })
})
