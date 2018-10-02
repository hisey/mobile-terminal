//引入axios
import axios from 'axios'
import qs from 'qs'
import {
  Toast
} from 'mand-mobile'
import {
  basicUrl
} from '@/utils/env'
import store from '@/store'
import {
  COOKIE_KEY
} from "@/utils/const"
let setStore = require('store')
let cancel, promiseArr = {}
let requestConfig = ""
//请求拦截器
axios.interceptors.request.use(config => {
  //发起请求时，取消掉当前正在进行的相同请求
  requestConfig = "";
  requestConfig = "请求地址为：" + config.url;
  if (config.method == "get") {
    requestConfig = requestConfig + ';请求参数为：' + JSON.stringify(config.params)
  } else {
    requestConfig = requestConfig + ';请求参数为：' + JSON.stringify(config.data)
  }
  if (config.url.indexOf("syncManual") > -1) {
    config.timeout = 300000
  }
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  
  return config
}, error => {
  if (process.env.NODE_ENV == "development") {
    // VUE.$vux.alert.show({
    //   title: '报警',
    //   content: requestConfig + "  error为：" + JSON.stringify(error)
    // });
  }
  return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  /**
   * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
   * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
   */
  const res = response.data;
  if (res.code == '1001') {
    store.dispatch('login')
  } else if (res.code == '1002') {
    Toast.failed('没有权限访问')
  } else if (res.code == '2') {
    Toast.failed('系统繁忙，请稍后重试！')
  } else if (res.code == '1000') {
    Toast.failed(res.msg,3000)
  } else if (res.code == undefined && process.env.NODE_ENV == "development") {
    Toast.failed(requestConfig + "  res为：" + JSON.stringify(res))
  } else {
    return Promise.resolve(res)
  }
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        err.message = '未授权，请重新登录'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务器端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "系统繁忙请稍后重试！"
  }
  Toast.failed(err.message)
  return Promise.reject(err.response)
})

axios.defaults.baseURL = basicUrl
axios.defaults.timeout = 100000
// let basicUrl = ""
// if (process.env.NODE_ENV == "development") {
//   basicUrl = "http://localhost:9999"
// } else {
//   basicUrl = "http://192.168.3.15"
// }

//设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// }
// axios.defaults.withCredentials = false

export default {
  //get请求
  get(url, data) {
    return axios.get(url, {
      params: data
    })
  },
  //post请求
  post(url, data,headers) {
    if(headers){
      return axios.post(url, data,headers)
    }else{
      return axios.post(url, data)
    }
  }
}
