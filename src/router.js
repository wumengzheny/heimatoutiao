import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './views/home/main.vue'
import NotFound from './views/404'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: '',
      component: Main
    }, {
      path: 'comment',
      component: () => import('./views/comment')
    }, {
      path: 'material',
      component: () => import('./views/material')
    },
    {
      // 内容管理
      path: 'articles',
      component: () => import('./views/articles')
    }, {
      // 发布文章
      path: 'publish',
      component: () => import('./views/publish')
    },
    {
      // 修改文章
      path: 'publish/:articleId', // 定义动态路由参数
      component: () => import('./views/publish')
    }, {
      // 账户信息
      path: 'account',
      component: () => import('./views/account')
    }, {
      // 图文数据
      path: 'fansdata',
      component: () => import('./views/fans/fansdata.vue')
    }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/login',
    component: Login
  },
  {
    path: '*',
    component: NotFound
  }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
