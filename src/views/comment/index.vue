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
         <!-- formatter是el-table-column属性 -->
         <el-table-column label="标题" width='500' prop='title'></el-table-column>
        <el-table-column :formatter="formatter" label="评论状态" prop="comment_status"></el-table-column>
        <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
        <el-table-column label="粉丝评论数" prop='fans_comment_count'></el-table-column>
      <el-table-column label="操作" width='150'>
        <template slot-scope="obj">
          <!-- 通过 Scoped slot 可以获取到
          row, column, $index 和 store（table 内部的状态管理）的数据，
          用法参考 demo。 -->
          <el-button type='text' size="small">修改评论</el-button>
          <el-button type='text' size="small" :style="{color:obj.row.comment_status?'#E6A23C':'#409EFF'}" >{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>

      </el-table-column>

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
  },
  methods: {
    formatter (row, column, cellValue, index) {
      return row.comment_status ? '正常' : '关闭'
    },
    getComments () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
        // console.log(result.data)
      })
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>

</style>
