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
#container {
  grid-row: 2;
  display: flex;
  flex-wrap: wrap;
  margin: 2em 1em;
}
</style>
