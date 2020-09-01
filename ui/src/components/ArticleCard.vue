<template>
  <a class='articleCard' :href='article.articleUrl'>
    <h2 >{{ article.title.length > 50 ? this.formatTitle(article.title) : article.title}}</h2>
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
      let titleContent = title.replace(/^(.{50}[^\s]*).*/, "$1").trim();
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
  height: 37.5vh;
  overflow: hidden;
  box-shadow: 0.2em 0.25em 0.15em #333, -0.02em 0.25em 0.15em #333, -0.02em -0.02em 0.15em #333, 0.2em -0.02em 0.15em #333;
}
.articleCard h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  height: 3em;
  font-size: 1.5em;
  border-bottom: .1vw solid #555;
  width: 100%;
  background-color: #bbb;
}
.articleCard img {
  grid-row: 2;
  width: 100%;
  height: 35vh;
}
.articleCard:hover {
  cursor: pointer;
}
</style>
