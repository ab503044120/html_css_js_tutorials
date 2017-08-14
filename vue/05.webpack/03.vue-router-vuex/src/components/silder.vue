<template>
  <div class="sild-box" :class="slideShow?'sild-box-show':'sild-box-hide'">
    <div :class="slideShow?'sild-background':'sild-background-hide'" @click="CLOSE"></div>
    <div class="sild-menu" :class="slideShow?'sild-menu-show':'sild-menu-hide'"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'silder',
  data: function () {
    return {

    }
  },
  methods: {
    ...mapActions([
      'TOGGLE', 'CLOSE'
    ])
  },
  computed: {
    ...mapGetters([
      'slideShow'
    ])
  }
}
</script>

<style>
.sild-box {
  position: fixed;
  width: 100%;
  height: 100%;
}

.sild-background {
  position: absolute;
  background: #000000;
  height: 100%;
  width: 100%;
  opacity: 0.5;
  transition-duration: 1s;
}

.sild-background-hide {
  opacity: 0;
  transition-duration: 1s;
}

.sild-box-show {
  height: 100%;
}

.sild-box-hide {
  height: 0px;
  -webkit-transition-delay: 1s;
  transition-delay: 1s;
}

.sild-menu {
  margin-left: -200px;
  background: yellow;
  height: 100%;
  width: 200px;
}

.sild-menu-hide {
  transform: translate(0px, 0px);
  transition-delay: 0s;
  transition-timing-function: ease;
  transition-duration: 1s;
}

.sild-menu-show {
  transform: translate(200px, 0px);
  transition-delay: 0s;
  transition-timing-function: ease;
  transition-duration: 1s;
}
</style>
