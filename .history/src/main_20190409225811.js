import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from "./store/index";
import * as axios from "./common/Utils/Http";
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
