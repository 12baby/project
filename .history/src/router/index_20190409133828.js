import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Store from '../store/index.js'


Vue.use(Router);

/**
 * mate对象中属性的说明
 * 
 * requireAuth   是否缓存组件 true-缓存 false-不缓存   注：属性不存在等同于false
 * loading       全局loading显示  true-显示 false-不显示 注：属性不存在等同于false
 *  */ 
let arry = [
  {
    path: '/',  //  找药
    name: 'home',
    component: Home,
    meta: { requireAuth: false }
  },
  {
    path: '/about',  // 畅销品种
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/')
  },
  {
    path: '/Recommend', // 推荐品种
    name: 'Recommend',
    component: () => import(/* webpackChunkName: "about" */ '../views/recommend/Recommend.vue')
  }
]
let list = arry.concat(RouterArr)
const router = new Router({
  // mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  // base: process.env.BASE_URL,
  routes: list
});

// 路由跳转
router.beforeEach((to, from, next) => {

  // 是否显示全局loading加载
  if (to.meta.loading) {
    Store.state.globalLoading = true;
  } else {
    Store.state.globalLoading = false;
  }

  next();
})

export default router
