<template>
  <div>
    <dl>
      <dt>
        <dd v-for="(article,index) in list" :key="index" @click="deleteArticle(index)">
          {{article}}
        </dd>
      </dt>
    </dl>
  </div>
</template>

<script>
var articleList = {
  list: [1, 2, 3]
};
export default {
  data: function () {
      return articleList;
  },
  methods: {
    deleteArticle: function (index) {
      this.list.splice(index, 1);
    }
  }
}
</script>

<style>

</style>


