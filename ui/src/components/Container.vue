<template>
  <div id='container' >
    <img id='dummyContent' v-if='isLoading' src='../assets/lazy-loader.gif'/>
    <ArticleCard v-else v-for='article in loadedArticles' :key='article.title' v-bind:article='article' v-bind:isLoading='isLoading'/>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard';

export default {
  name: 'Container',
  props: {
    articles: Array,
    isLoading: Boolean
  },
  data() { 
    return {
      loadedArticles: null,
      toLoadArticles: null
    }
  },
  components: {
    ArticleCard
  },
  beforeUpdate: function() {
    this.loadArticles();
  },
  methods: {
    loadArticles() {
      if (this.articles === null) {
        this.loadedArticles = this.loadedArticles = null;
      } else {
        this.loadedArticles = this.articles.slice(0, 8);
        this.toLoadArticles = this.articles.slice(8, this.articles.length);
      }
    }
  }
}
</script>

<style scoped>
#dummyContent {
  justify-self: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 70vh;
}
#container {
  grid-row: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2em 0;
}
</style>
