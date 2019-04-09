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
    path: '/',  
    name: 'home',
    component: Home,
    meta: { requireAuth: false }
  },
  {
    path: '/about',  
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new Router(
  routers: 
);
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
