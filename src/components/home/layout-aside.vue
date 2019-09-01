<template>
   <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="2">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

       <!-- el-submenu是有折叠的菜单 -->
      <el-submenu>
           <!-- el-submenu定义具名插槽 title -->
           <template slot="title">
               <i class="el-icon-s-order"></i>
               <span>内容管理</span>
           </template>
           <!-- el-submenu 是折叠的 => el-menu-item  => 下拉内容时匿名插槽 ,显示内容时具名插槽 -->
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论管理</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu>
            <!-- el-submenu定义具名插槽 title -->
          <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>粉丝管理</span>
          </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
          <i class="el-icon-s-tools"></i>
          <span slot="title">账户管理</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {

}
</script>

<style>

</style>
