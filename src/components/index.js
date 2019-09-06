import layoutAside from './home/layout-aside.vue'
import layoutHeader from './home/layout-header.vue'
import breadCrumb from './common/bread-crumb'

// 富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside)/// / 注册 左侧导航组件
    Vue.component('layout-header', layoutHeader)// 注册头部组件
    Vue.component('bread-crumb', breadCrumb) // 注册面包屑组件
    Vue.component('quill-editor', quillEditor)// 注册富文本编辑器
  }
}
