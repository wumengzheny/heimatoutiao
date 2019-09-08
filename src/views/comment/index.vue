<template>
  <div>
    <el-card v-loading="loading">
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
          , column, $index 和 store（table 内部的状态管理）的数据，
          用法参考 demo。 -->
          <el-button type='text' size="small">修改评论</el-button>
          <el-button @click="openOrClose(obj.row)" type='text' size="small" :style="{color:obj.row.comment_status?'#E6A23C':'#409EFF'}" >{{obj.row.comment_status?'关闭评论':'打开评论'}}</el-button>
        </template>

      </el-table-column>

      </el-table>
      <el-row type="flex" justify="center" style="margin:10px 0">
         <!-- 分页组件  current-page当前页码 每页显示多少条 page-size total 总数 -->
           <el-pagination
           @current-change="changePage"
           :current-page="page.page"
           :page-size="page.pageSize"
            background
            layout="prev, pager, next"
            :total="page.total">
</el-pagination>
      </el-row>

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false, // 控制精度条的状态
      list: [],
      page: {
        page: 1, // 当前页码
        pageSize: 10, // 当前每页条数
        total: 0// 总条数
      }

    }
  },
  methods: {
    changePage (newPage) {
      // alert(newPage)
      this.page.page = newPage
      this.getComments()
    },
    async openOrClose (row) {
      let mess = row.comment_status ? '关闭' : '打开'
      // this.$confirm(`您是否要${mess}评论？`, '提示').then(() => {
      //   // 调用接口
      //   this.$axios({
      //     method: 'put',
      //     url: '/comments/status',
      //     params: { article_id: row.id.toString() },
      //     data: { allow_comment: !row.comment_status }
      //   }).then(result => {
      //     this.getComments()// 成功之后 重新调用 拉取数据的方法=>前后台同步
      //   })
      // })
      await this.$confirm(`您是否要${mess}评论？`, '提示')
      // 调用接口
      await this.$axios({
        method: 'put',
        url: '/comments/status',
        params: { article_id: row.id.toString() },
        data: { allow_comment: !row.comment_status }
      })
      this.getComments()// 成功之后 重新调用 拉取数据的方法=>前后台 同步
    },
    formatter (row, column, cellValue, index) {
      return row.comment_status ? '正常' : '关闭'
    },
    // getComments () {
    //   this.loading = true// 请求数据之前 把进度条打开
    //   this.$axios({
    //     url: '/articles',
    //     params: { response_type: 'comment', page: this.page.page, per_page: this.page.pageSize }
    //   }).then(result => {
    //     this.loading = false // 响应数据之后
    //     this.list = result.data.results
    //     this.page.total = result.data.total_count
    //   // console.log(result.data)
    //   })
    // }
    async  getComments () {
      this.loading = true// 请求数据之前 把进度条打开
      let result = await this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.page, per_page: this.page.pageSize }
      })
      this.loading = false // 响应数据之后
      this.list = result.data.results
      this.page.total = result.data.total_count
      // console.log(result.data)
    }
  },
  created () {
    this.getComments()
  }
}
</script>

<style>

</style>
