/**
 * exhaustgas模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '../http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const home = {
  // get请求
  picList() {
    return axios.get(`${base.baseurl}/pic/getIndexPic`)
  },
  // json格式请求  参数对象转化为json字符串  str = JSON.stringify(obj);
  userList(params) {
    return axios.post(`${base.baseurl}/sys/user/list`, (params), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  // post请求
  sign(params) {
    return axios.post(`${base.baseurl}/sys/login`, qs.stringify(params))
  },
}

export default home;
