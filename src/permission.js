import router from './router'
router.beforeEach(function (to, from, next) {
  // 如果要去的地址以/home为起始，就说明需要判断当前是不是登录 判断token
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
