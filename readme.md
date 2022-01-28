<!--
 * @Author: guminqi
 * @Date: 2021-11-19 14:35:01
 * @LastEditTime: 2022-01-28 15:30:29
 * @LastEditors: guminqi
 * @Description:
-->

npm -i -D -S
// https://mp.weixin.qq.com/s/qIbUEFS1SUdlm8-Z8ecmmg 地址

- --save-dev 安装到开发环境 简写为 -D
- --save 安装到生产环境 简写为 -S
- 啥都不写安装到生产环境

-- loadsh 相当于 jquery
style-loader@1 :用于将 css 文件注入到 index.html 中的<style>标签上
css-loader@3 :用于处理 css 文件，使得能在 js 文件中引入使用@import
webpack@4
webpack-cli@3
sass-loader@8:解析 sass 成 css
node-sass@4:是 sass-loader 的一个依赖项
postcss-loader@4: 是一个 css 预处理器,为 css3 的属性添加前缀,提前使用 css 新特性,实现 css 模块化,防止 css 样式冲突。
autoprefixer@9:
sass-resources-loader@2 :sass 的全局变量注入
mini-css-extract-plugin@0.9.0 把 css 从 js 中抽离出来 4 用这个 1-3 用 extract-text-webpack-plugin
// 压缩 css
optimize-css-assets-webpack-plugin@5.0.4
// 压缩 js
uglifyjs-webpack-plugin@1
// 处理类型图片音频文件导入
file-loader@6
// 处理类型图片音频文件导入,图片文件可以设置最大 size,在最大 size 以下大小的图片会被转成 base64 格式
url-loader@4
//es6 及以上的 js 转换成 es5
babel-loader@8 @babel/core@7 @babel/preset-env@7
//查看打包文件的数据可视化
webpack-bundle-analyzer@4
//这是一个分成 common.dev.prod 的方法
webpack-merge@5
webpack 模块的加载思路
加载 main.js=>执行 webpackBootstrap=>*webpack_require*入口模块=>执行模块=>有其他模块=>是=>*webpack_require*其他模块=>执行
html-webpack-plugin@4 //动态注入 css/js 和生存 html 文件
module.rules 的参数:
use:为模块使用指定 loader,传入一个字符串数组,加载顺序从右往左
module.rules 的匹配规则:
{test:Conditaion}:匹配特定条件,一般提供正则表达式或正则表达式的数组,非必须
{include:Condition}:匹配特定条件,一般是提供一个字符串或者字符串数组,非必须
{include:Condition}:排除特定条件,一般是提供一个字符串或者字符串数组,非必须
{ and: [Condition] }：必须匹配数组中的所有条件
{ or: [Condition] }：匹配数组中任何一个条件
{ not: [Condition] }：必须排除这个条件

clean-webpack-plugin 有问题
