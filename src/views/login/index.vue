<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单组件 el-form表单容器 -->
      <!-- 数据校验 首先要给el-form一个model属性 表示数据对象 -->
      <el-form ref="loginForm" style="margin-top:20px" :model='loginForm' :rules="loginRules">
        <!-- 表单项 -->
        <el-form-item prop="mobile">
          <!-- 放置组件内容 -->
          <el-input placeholder="请输入手机号" v-model="loginForm.mobile">

          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:250px" v-model="loginForm.code" placeholder="请输入验证码">

          </el-input>
           <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 绑定是否勾选 -->
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click='login' type="primary"  style="width:100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    let validator = function (rule, value, callBack) {
      if (value) {
        callBack()
      } else {
        callBack(new Error('您必须同意才能进入'))
      }
    }
    return {
      loginForm: {
        mobile: '',
        code: '',
        check: false// 是否勾选协议
      },
      // 定义rules 校验规则
      loginRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3456789]\d{9}$/, // 正则表达式
          message: '手机号格式不正确'
        }],
        code: [{
          required: true,
          message: '验证码不能为空'
        },
        {
          pattern: /^\d{6}$/,
          message: '验证码必须为6位'
        }],
        check: [{
          validator
        }]
      }
    }
  },
  methods: {
    login () {
      // 通过el-form组件的validata方法，校验整个表单的数据
      // 传入一个回调函数 isOK为true 说明所有的校验规则都成功了
      // 如果为false 说明有错误
      this.$refs.loginForm.validate(isOk => {
        // if (isOk) {
        //   this.$message({ type: 'success', message: '成功' })
        // } else {
        //   this.$message({ type: 'warning', message: '失败' })
        // }

        if (isOk) {
          // 请求
          // axios中data中放置body参数， params是放置地址参数的
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginForm
          }).then(result => {
            // console.log(result)
            // 放到前端的缓存中
            window.localStorage.setItem('user-token', result.data.token)
            // 编程时式导航
            this.$router.push('/')// 登录成功 跳转到home页
          }).catch(() => {
            this.$message({
              message: '手机号或者验证码错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login{
  background-image: url('../../assets/img/login_bg.jpg');
  height:100vh;
  background-size:cover;
  display: flex;
  justify-content:center;
  align-items: center;
  .box-card{
    width:440px;
    height: 350px;
    .logo{
     text-align: center;
     img{
       height: 45px;
     }
    }
  }

}
</style>
