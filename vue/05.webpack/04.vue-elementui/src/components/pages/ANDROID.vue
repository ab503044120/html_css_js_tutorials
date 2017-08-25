<template>
  <div class="android-container" v-loading="loading">
    <el-row>
      <el-col :span="8" v-for="(o, index) in datas" :key="index" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="o.images[0]" class="image" >
          <div style="padding: 14px;">
            <span>{{o.desc}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$http('http://gank.io/api/random/data/Android/20').then(response => {
      console.log(response)
      if (!response.data.error) {
        var self = this
        response.data.results.forEach(function (element) {
          if (element.images != null) {
            self.datas.push(element)
          }
        })
      }
      this.loading = false
    })
  },
  data: () => {
    return {
      loading: true,
      datas: []
    }
  }
}
</script>

<style scoped>
.android-container {
  height: 100%;
  width: 100%;
  position: relative
}
.image{
  height: 50%;
  width: 50%;
}
</style>
