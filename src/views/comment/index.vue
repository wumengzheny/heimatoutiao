<template>
  <div>
    <el-card>
      <!-- 插槽内容=>标题 -->
      <bread-crumb slot="header">
        <template slot='title'>
          评论列表
        </template>
      </bread-crumb>
      <el-table :data="list">
         <el-table-column label="标题" width='500' prop='name'></el-table-column>
        <el-table-column label="评论状态" prop="name"></el-table-column>
        <el-table-column label="总评论数" prop="name"></el-table-column>
        <el-table-column label="粉丝评论数" prop='name'></el-table-column>
      <el-table-column label="操作" prop='name'></el-table-column>
      </el-table>

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  } }
</script>

<style>

</style>
