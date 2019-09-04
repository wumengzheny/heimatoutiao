<template>
  <el-card class="material">
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="全部素材" name="all">
        <!-- 全部素材的内容 -->
        <div class="card-list">
          <el-card v-for="item in list" :key="item.id" class="img-card">
            <img :src="item.url" alt />
            <el-row type="flex" align="middle" justify="space-around" class="operate">
              <i :style="{color:item.is_collected ? 'red':''}" class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>

         <!-- 分页 -->
          <el-row type="flex" justify="center" class="fen">
            <el-pagination @current-change="changePage" :current-page="page.page" :page-size="page.pageSize" background layout="prev, pager, next" :total="page.total"></el-pagination>
          </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <!-- 收藏素材的内容 -->
        <div class="card-list">
          <el-card v-for="item in list" :key="item.id" class="img-card">
            <img :src="item.url" alt />
          </el-card>
        </div>
      <el-row type='flex' justify="center">
          <el-pagination @current-change="changePage" :current-page="page.page" :page-size="page.pageSize"  :total="page.total" background layout="prev, pager, next" ></el-pagination>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: [],
      page: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    changePage (newPage) {
      this.page.page = newPage
      this.getMaterial()
    },
    // 切换页签
    changeTab () {
      // this.activeName是最新的页签
      // 加载不同类型的数据
      // all => 所有的数据
      // collect => 去加载收藏数据
      this.page.page = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.page,
          per_page: this.page.pageSize,

          collect: this.activeName === 'collect'
        }
        // 全部的数据为fasle就是查看所有的图片
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.material {
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .img-card {
      width: 150px;
      height: 150px;
      margin: 20px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .operate {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background-color: #f4f5f6;
        font-size: 18px;
      }
      .fen{

      }
    }
  }
}
</style>
