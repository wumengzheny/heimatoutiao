
// 处理axios拦截器  请求拦截器 响应拦截器
import axios from 'axios'
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

// export default {
//   install: function (Vue) {
//     Vue.prototype.$axios = axios // 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
//   }
// }
export default axios
