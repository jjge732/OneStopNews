<template>
  <a class='articleCard' :href='article.articleUrl'>
    <h2 >{{ article.title.length > 45 ? this.formatTitle(article.title) : article.title}}</h2>
    <img v-if='article.imageUrl' :src='article.imageUrl' />
    <img v-else-if='article.source === "nyt"' src='../assets/nytLogo.jpeg'/>
    <img v-else src='../assets/generic_background.jpg'/>
  </a>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: Object
  },
  methods: {
    formatTitle(title) {
      let titleContent = title.replace(/^(.{45}[^\s]*).*/, "$1").trim();
      if (/\W/.test(titleContent.charAt(titleContent.length - 1))) {
        titleContent = `${titleContent.substring(0, titleContent.length - 1)}`;
      }
      return `${titleContent}...`;
    }
  }
}
</script>

<style scoped>
.articleCard {
  display: grid;
  color: inherit;
  box-sizing: border-box;
  text-decoration: none;
  margin: 10px 1.125vw;
  width: 20vw;
  justify-items: center;
  text-align: center;
  height: 37vh;
  overflow: hidden;
  border-radius: 10px;
}
.articleCard h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  height: 3em;
  font-size: 1.5em;
  box-shadow: 0 5px 30px #ddd;
  padding: 2.5px 10px;
  margin-bottom: 5px;
  width: 100%;
  background-color: rgba(300, 300, 300, 0.8);
}
.articleCard img {
  grid-row: 2;
  width: 100%;
  height: 25vh;
  border-radius: 0 0 10px 10px;
}
.articleCard:hover {
  cursor: pointer;
}
</style>
