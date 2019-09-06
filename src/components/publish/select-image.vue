<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部素材" name="all">用户管理</el-tab-pane>
    <el-tab-pane label="上传图片" name="upload">配置管理</el-tab-pane>
  </el-tabs>
</template>

<script>
// 素材查询 图片上传
export default {
  data () {
    return {
      activeName: 'all'
    }
  }
}
</script>

<style>

</style>
