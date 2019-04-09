import Vue from 'vue';
import Vuex from 'vuex';
import Search from './Search/search.js';
import Details from './Details/details.js';
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
    Search: Search,
    Details: Details
  }
})

export default store
