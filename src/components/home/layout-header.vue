<template>
 <el-row class="layout-header" type='flex' justify="space-between">
       <!-- span是给col的宽度  elementUI将页面分为24分 -->
     <el-col :span="7" class="left">
         <i class="el-icon-s-unfold icon"></i>
         <span>
         江苏传智播客教育科技股份有限公司
         </span>
     </el-col>
     <el-col :span="3" class="right">
         <img class="header-img" :src="!userInfo.photo?userInfo.photo: defaultImg" alt="">
         <!-- el-dropdown 下拉菜单 =>  显示名称 匿名插槽, 下拉内容是具名插槽 -->
     <el-dropdown trigger="click" @command='handleMenuItem'>
 <span class="el-dropdown-link">
        {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command='account'>个人信息</el-dropdown-item>
        <el-dropdown-item command='git'>git地址</el-dropdown-item>
        <el-dropdown-item command='lgout'>退出</el-dropdown-item>

      </el-dropdown-menu>
     </el-dropdown>

     </el-col>
 </el-row>

</template>

<script>

export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    getUserInfo () {
      // let token = window.localStorage.getItem('user-token')// 获取token
      this.$axios({
        url: '/user/profile'
        // headers: { 'Authorization': `Bearer ${token}` }

      }).then(result => {
        console.log(result)
        this.userInfo = result.data.data
      })
    },
    handleMenuItem (command) {
    //   alert(command)
      if (command === 'account') {
        // 账户信息
      } else if (command === 'git') {
        // git地址
        window.location.href = 'https://github.com/shuiruohanyu/82heimatoutiao'
      } else {
        // 退出
        window.localStorage.clear()// 清空缓存 清除所有的缓存 只能清除当前项目的缓存
        this.$router.push('/login')// 跳转到登录页
      }
    }

  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style lang='less' scoped>
.layout-header{
    .left{
        .icon{
            font-size: 22px;
            margin-right: 3px;
        }
    display: flex;
    align-items: center;
    }
    .right{
        .header-img{
    border-radius:50%;
    margin-right: 5px;
    width: 40px;
    height: 40px;
}
      display: flex;
      align-items: center;
    }
}

</style>
