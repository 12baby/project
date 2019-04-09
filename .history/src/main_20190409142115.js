import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as axios from "./common/Utils/Http";
import ElementUI from 'element-ui'
import "element-ui/lib/utils/"
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
