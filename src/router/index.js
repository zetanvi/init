import Vue from 'vue'
import Router from 'vue-router'

// 解决重复点击导航路由报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import('@/components/Home'),
    },
    // 登录
    {
      path: '/login',
      name: 'Login',
      meta: {
        auth: true
      },
      component: () => import('@/components/Login'),
    },
  ]
})
