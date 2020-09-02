<template>
  <div id='container' >
    <img id='dummyContent' v-if='articles === null' src='../assets/lazy-loader.gif'/>
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
      storedArticles: null,
      scrolledToBottom: false
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
      if (this.articles !== null) {
        this.loadedArticles = this.articles.splice(0, 24);
        this.storedArticles = this.articles.splice(0, this.articles.length);
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
  height: 78vh;
}
#container {
  grid-row: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em 0;
}
</style>
