import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
// 自定义组件
import Component from './components'// 可以不用写后面的index.js
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import axios from './utils/axios.config'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI组件 任意位置都可以使用
Vue.use(Component)// 全局注册自定义组件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
