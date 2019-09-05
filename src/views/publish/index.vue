<template>
  <el-card>
      <bread-crumb slot="header">
      <template slot="title">发布文章</template>
      </bread-crumb>
      <!-- {{formData}} -->
      <el-form ref="publishForm" :model="formData" :rules="publishRules" style="margin-left:100px" label-width="100px">
          <el-form-item label="标题" prop='title'>
              <el-input v-model="formData.title" style="width:400px"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
              <el-input v-model="formData.content" type="textarea" :rows="4"></el-input>
          </el-form-item>
          <el-form-item label="封面">
              <el-radio-group  v-model="formData.cover.type">
                  <el-radio :label="1">单图</el-radio>
                  <el-radio :label="3">三图</el-radio>
                  <el-radio :label="0">无图</el-radio>
                  <el-radio :label="-1">自动</el-radio>
              </el-radio-group>
          </el-form-item>
          <el-form-item label="频道" prop="channel_id">
              <el-select v-model="formData.channel_id">
                  <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
              <el-button @click='publish' type='primary'>发表文章</el-button>
              <el-button>存入草稿</el-button>
          </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      channels: [],
      formData: {
        title: '',
        content: '',
        cover: {
          // 封面类型 -1:自动，0-无图，1-1张，3-3张
          type: 0,
          images: []
        },
        channel_id: null
      },
      publishRules: {
        title: [{
          required: true,
          message: '标题不能为空'
        }],
        content: [{
          required: true,
          message: '内容不能为空'
        }],
        channel_id: [{
          required: true,
          message: '频道不能为空'
        }]
      }
    }
  },
  methods: {
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },

    // 发布文章
    publish () {
      this.$refs.publishForm.validate((isOk) => {
        if (isOk) {
          this.$axios({
            url: '/articles',
            method: 'post',
            params: { draft: false }, // draft 为true时 就是草稿
            data: this.formData
          }).then(() => {
          // 编程式导航
            this.$router.push('/home/articles')// 跳转到文章列表页面
          })
        }
      })
    }
  },
  created () {
    this.getChannels()
  }
}
</script>

<style>

</style>
