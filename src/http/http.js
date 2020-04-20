import axios from "axios";
import {getlStore} from '../utils/storage'
import store from '../store'



// 创建axios实例
var instance = axios.create({
  timeout: 10000
});
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 取消未完成请求
const CancelToken = axios.CancelToken


// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 请求头添加token
    const token = getlStore('token')
    token && (config.headers.token = token);
    // 取消未完成请求配置
    config.cancelToken  = new CancelToken((c)=>{
      store.dispatch('paddingRequest',c)
    })
    return config;
  },
  error => {
    return Promise.error(error);
  })
// 响应拦截器
instance.interceptors.response.use(
  res => res.status == 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
      let {response} = error
    if(axios.isCancel(error)){
      return new Promise(()=>{})
    }else if (response) {
        // 请求已发出，但是不在2xx的范围 
        errorHandle(response.status, response.data.msg);
        return Promise.reject(response);
    } else {
        // // 处理断网的情况
        // // eg:请求超时或断网时，更新state的network状态
        // // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        // // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
        // if (!window.navigator.onLine) {
        //    store.commit('changeNetwork', false);
        // } else {
        //     return Promise.reject(error);
        // }
    }
    console.log("请求出错")
  }
)

const errorHandle = (status, msg) => {
  // 状态码判断
  switch (status) {
    // 401: 没有授权
    case 401:
      console.log('没有授权');
      break;
      // 404  访问路径找不到
    case 404:
      console.log('访问路径找不到');
      break;
  }
}
// 导出instance
export default instance;
