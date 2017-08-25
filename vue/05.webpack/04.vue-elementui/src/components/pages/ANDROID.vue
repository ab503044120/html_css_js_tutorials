<template>
  <div class="android-container" v-loading="loading">
  
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.$http()
  },
  data: () => {
    return {
      loading: true,
      datas: {}
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
</style>
