import Vue from "vue";
import App from "./App.vue";

/* 引入未打包源码 */
import distUI from "../packages/index";

/* 引入放入node_modules文件夹下的成果包 */
// import distUI from "dist-ui/dist-ui.umd";
// import "dist-ui/dist-ui.css";

Vue.config.productionTip = false;
Vue.use(distUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
