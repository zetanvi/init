// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './http/api'
import store from './store'
import 'lib-flexible'
// 给Vue挂载$api,使用：this.$api
Vue.prototype.$api = api
Vue.config.productionTip = false




// 给Date对象添加toLocaleString方法，自定义格式化日期
Date.prototype.toLocaleString = function () {
  // 补0   例如 2018/7/10 14:7:2  补完后为 2018/07/10 14:07:02
  function addZero(num) {
    if (num < 10)
      return "0" + num;
    return num;
  }
  // 按自定义拼接格式返回
  return this.getFullYear() + "/" + addZero(this.getMonth() + 1) + "/" + addZero(this.getDate()) + " " +
    addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
};

// 切换页面时取消未完成的请求和未登录时跳转到登录页面
router.beforeEach((to, from, next) => {
  store.state.home.paddingRequest.forEach(c=>{
    c && c()
  })
  store.dispatch('paddingRequest', [])
  if (!to.meta.auth) {
    // api.user.userCompany().then(res => {
    //   if (res.data.code == 0) {
    //     next()
    //   } else {
    //     next({
    //       path: '/login'
    //     })
    //   }
    // });
    next()
  } else {
    next()
  }
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //将store实例注册到所有子组件中
  components: {
    App
  },
  template: '<App/>'
})
