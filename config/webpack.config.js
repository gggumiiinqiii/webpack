const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.js",
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
    ],
    // 不去解析jquery和lodash的代表库的依赖
    noParse: function (content) {
      return /jquery|lodash/.test(content);
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", //最终输出的文件名
      chunkFilename: "[id].css",
    }),
  ],
};
