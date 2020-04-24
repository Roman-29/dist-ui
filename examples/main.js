import Vue from "vue";
import App from "./App.vue";
import distUI from "../packages/index";

Vue.config.productionTip = false;
Vue.use(distUI);

new Vue({
  render: h => h(App)
}).$mount("#app");
