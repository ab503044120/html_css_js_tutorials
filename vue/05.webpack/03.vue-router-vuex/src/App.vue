<template>
  <div id="app">
    <div class="nav">
      <span @click="TOGGLE"></span>
    </div>
    <silder ></silder>
    <div class="content">
      <router-link to='/home'>home</router-link>
      <router-link to='/news'>news</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Silder from './components/silder.vue'
import {mapActions} from 'vuex'
export default {
  name: 'app',
  components: { Silder },
  data: function () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'TOGGLE'
    ])
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

.content {
  padding-top: 30px;
}

.nav {
  background: yellowgreen;
  height: 30px;
  width: 100%;
  position: fixed;
}

.nav>span {
  display: inline-block;
  height: 10px;
  width: 10px;
  background: red
}
</style>
