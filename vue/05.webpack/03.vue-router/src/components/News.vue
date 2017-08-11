<template>
  <div>
    <div>
      {{msg}}
    </div>
    <ul>
      <li>
        <router-link to="/news/新闻1">新闻1</router-link>
      </li>
      <li>
        <router-link to="/news/新闻2">新闻2</router-link>
      </li>
      <li>
        <router-link to="/news/新闻3">新闻3</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: "我是新闻主页",
      news: {
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none
}
</style>
