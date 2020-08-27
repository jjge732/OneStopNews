<template>
  <div id='container' >
    <ArticleCard v-for='article in articles' :key='article.title' v-bind:article='article'/>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard';

export default {
  name: 'Container',
  props: {
    articles: Array,
  },
  components: {
    ArticleCard
  }
}
</script>

<style scoped>
#contaienr {
  grid-row: 3;
}
</style>
