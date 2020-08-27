<template>
  <a class='articleCard' :href='article.articleUrl' >
    <h1>{{article.title}}</h1>
    <img :src='article.imageUrl' />
  </a>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: Object,
  }
}
</script>

<style scoped>
.article {
  color: #4ff;
}
.article:hover {
    cursor: pointer;
}
</style>
