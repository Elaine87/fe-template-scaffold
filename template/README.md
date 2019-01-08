<!-- TOC -->

- [base-simple 分支功能](#base-simple-分支功能)
- [webpack.base.js 基础配置](#webpackbasejs-基础配置)
- [分支文件](#分支文件)
- [注意事项](#注意事项)

<!-- /TOC -->
### base-simple 分支功能

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

*babel【支持es6,7】
*scss|sass|less
*unglify
*zip
*html 内嵌img
*多入口多出口配置
*输出优化
*打包文件查看：打包文件输入到server文件夹，node server.js --mock【本地 mock，否则走proxy】

### webpack.base.js 基础配置

### 分支文件

````javascript
 .cz-config
 .babelrc
 .editorconfig
 .eslintignore
 .eslintrc.rc
 .gitignore
 utils
 -------
````

### 注意事项

*入口文件路劲配置：./build/config.js 中entryPagePath，比如当前模板："../src/pages"
*按入口文件划分文件夹，文件夹下包含该页面所用的脚本以及样式文件（PS: 样式文件通过入口脚本加载），**文件名称可以与文件夹同名或者使用index前缀**
*项目必须开启eslint，规则在项目根目录下，规则按照分享js规范定制 ，不要随意变动
*eslintrc 规则支持react & jsx 语法检查

