import "./fonts/font.scss";

const install = function(Vue) {
  // 注册组件
  const req = require.context("./", true, /\.vue$/);
  req.keys().forEach(fileName => {
    if (/\/index\.vue$/.test(fileName)) {
      return;
    }
    if (fileName.split("/").length == 3) {
      const component = req(fileName);
      Vue.component(component.default.name, component.default);
    }
  });
};

// 判断是否是直接引入文件，如果是就不用调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
