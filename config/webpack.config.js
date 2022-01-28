const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    // test:需要匹配的模块后缀名称
    // use:对应处理的loader插件名称(处理顺序是从右往左)
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          //添加options:sourceMao可以看到具体的样式在某个文件中
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")()],
              },
            },
          },
          { loader: "sass-loader", options: { sourceMap: true } },
          {
            loader: "sass-resources-loader",
            options: {
              resources: path.resolve(__dirname, "../src/style/base.scss"),
            },
          },
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/,
      //   include: [path.resolve(__dirname, "../src/")],
      //   use: ["file-loader"],
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        include: [path.resolve(__dirname, "../src/")],
        use: [
          {
            loader: "url-loader",
            //小于8kb的图片会转成base64编码
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
    // 不去解析jquery和lodash的代表库的依赖
    noParse: function (content) {
      return /jquery|lodash/.test(content);
    },
  },
  plugins: [
    //style.loader是把css直接注入到html中,minicssextractplugin是把css打包成一个文件
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css", //最终输出的文件名
      chunkFilename: "[id].[hash].css",
    }),
    //压缩css和js的插件
    new OptimizeCssAssetsPlugin({}),
    new UglifyJsPlugin({
      cache: true, //当 JS 没有发生变化则不压缩；
      parallel: true, //是否启用并行压缩；
      sourceMap: true, //是否启用 sourceMap；
    }),
    new HtmlWebpackPlugin({
      title: "leo study!",
      // 生成的文件标题
      filename: "main.html",
      // 最终生成的文件名
      minify: {
        // 压缩选项
        collapseWhitespace: true,
        // 移除空格
        removeComments: true,
        // 移除注释
        removeAttributeQuotes: true,
        // 移除双引号
      },
    }),
  ],
};
