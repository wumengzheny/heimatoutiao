<template>
  <div class="login">
    <el-card class="box-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 表单组件 el-form表单容器 -->
      <el-form style="margin-top:20px">
        <!-- 表单项 -->
        <el-form-item>
          <!-- 放置组件内容 -->
          <el-input>

          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input style="width:250px">

          </el-input>
           <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  style="width:100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

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
