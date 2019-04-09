import Vue from 'vue';
import Vuex from 'vuex';
import Order from './Order/order.js'; // 其他页面的一个
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    globalLoading: false  // 全局loading加载显示
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Order: Order
  }
})

export default store
