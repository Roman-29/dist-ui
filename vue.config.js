const path = require("path");

module.exports = {
  pages: {
    index: {
      // 修改项目入口文件
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html"
    }
  }
  // 拓展webpack配置，使packages加入编译
  // chainWebpack: config => {
  //   config.module
  //     .rule("js")
  //     .include.add(path.resolve(__dirname, "packages"))
  //     .end()
  //     .use("bable")
  //     .loader("babel-loader")
  //     .tap(options => {
  //       // 修改它的选项...
  //       return options;
  //     });
  // }
};
