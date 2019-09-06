<template>
  <div class="cover-image">
      <!-- {{images}} -->
      <!-- //注册图片的点击事件 -->
      <div @click="showDialog" class="image-item" v-for="(item,index) in images" :key="index">
          <img :src="item ? item : defaultImg" alt="">
      </div>
      <el-dialog @close="hideDialog" :visible="dialogVisbile">
          <!-- 素材选择/上传图片 -->
          <select-image></select-image>
      </el-dialog>
  </div>
</template>

<script>
// 根据images 来渲染页面
// images ['']
// images ['','','']
// images []
export default {
  props: ['images'],
  data () {
    return {
      // 定义一个变量 图片的base64字符串
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisbile: false
    }
  },
  methods: {
    showDialog () {
      this.dialogVisbile = true// 显示弹层
    },
    hideDialog () {
      this.dialogVisbile = false// 关闭弹层
    }
  }
}
</script>

<style lang="less" scoped>
.cover-image{
    display: flex;
    .image-item{
        width:200px;
        height: 200px;
        margin:10px;
        border:1px solid #ccc;
        img{
            width: 100%;
            height:100%;
        }
    }
}

</style>
