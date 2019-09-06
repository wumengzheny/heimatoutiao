<template>
  <div class="cover-image">
      <!-- {{images}} -->
      <!-- //注册图片的点击事件 -->
      <div @click="showDialog(index)" class="image-item" v-for="(item,index) in images" :key="index">
          <img :src="item ? item : defaultImg" alt="">
      </div>
      <el-dialog @close="hideDialog" :visible="dialogVisbile">
          <!-- 素材选择/上传图片 -->
          <select-image @onSelectImg="receiveImg"></select-image>
      </el-dialog>
  </div>
</template>

<script>
// 根据images 来渲染页面
// images ['']
// images ['','','']
// images []
export default {
  props: ['images'], // props 是只读的只能读取,不能修改
  data () {
    return {
      // 定义一个变量 图片的base64字符串
      defaultImg: require('../../assets/img/pic_bg.png'),
      dialogVisbile: false,
      selectIndex: -1
    }
  },
  methods: {
    //   接收子组件传过来的地址
    receiveImg (url) {
    //   alert(url)
      // url 不能在cover-image中修改 要在publish中修改
      // 要再次将url 传给父组件
      this.$emit('onClickImg', url, this.selectIndex)
      this.dialogVisbile = false
    },
    showDialog (index) {
      this.selectIndex = index// 将当前点击的索引赋值给data中一个变量
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
