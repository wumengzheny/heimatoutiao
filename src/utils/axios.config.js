
// 处理axios拦截器  请求拦截器 响应拦截器
import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios

// 请求拦截器
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}`// 统一注入token
  // debugger
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  return response.data ? response.data : {}
  //   debugger
//   return response
}, function (error) {
  // 对响应错误做处理
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
      //   401 token过期或未传
    case 401:
      window.localStorage.clear()
      router.push('/login')
      break
    default:
      message = '未知错误'
      break
  }
  Message({ type: 'warning', message })
  return new Promise(function () {

  })
//   return Promise.reject(error)
})
// export default {
//   install: function (Vue) {
//     Vue.prototype.$axios = axios // 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
//   }
// }
export default axios
