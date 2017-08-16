<template>
  <div class="home">
    <div class="home-header">
  
    </div>
    <div class="home-slidbar">
      <el-menu :default-active="routerAchive" theme="dark" router>
        <el-menu-item index="readme">
          readme
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title"> 新闻</template>
          <el-menu-item index="ANDROID">
            ANDROID
          </el-menu-item>
          <el-menu-item index="IOS">
            IOS
          </el-menu-item>
          <el-menu-item index="OTHER">
            福利
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view class="home-container"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    routerAchive () {
      return this.$route.path.replace('/home/', '')
    }
  }
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}

.home-header {
  background: #242f42;
  height: 70px;
  width: 100%;
  position: relative;
  left: 0;
  top: 0;
}

.home-container {
  margin-left: 210px
}

.home-slidbar {
  position: absolute;
  width: 210px;
  height: 100%;
  left: 0;
  top: 70px;
  background: #2E363F;
}

.home-slidbar-menu {}
</style>
