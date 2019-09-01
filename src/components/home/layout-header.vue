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
         <img class="header-img" src="../../assets/img/avatar.jpg" alt="">
         <!-- el-dropdown 下拉菜单 =>  显示名称 匿名插槽, 下拉内容是具名插槽 -->
     <el-dropdown trigger="click">
 <span class="el-dropdown-link">
        前端82期<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>git地址</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>

      </el-dropdown-menu>
     </el-dropdown>

     </el-col>
 </el-row>

</template>

<script>
export default {

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
