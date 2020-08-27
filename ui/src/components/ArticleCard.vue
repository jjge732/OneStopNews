<template>
  <a class='articleCard' :href='article.articleUrl' >
    <h2 >{{ article.title.length > 60 ? `${article.title.replace(/^(.{60}[^\s]*).*/, "$1")}...` : article.title}}</h2>
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
.articleCard {
  display: grid;
  color: inherit;
  text-decoration: none;
  margin: 10px .8vw;
  width: 30vw;
  justify-items: center;
  text-align: center;
  border: .1vw solid #555;
  height: auto;
  box-shadow: 0.2em 0.25em 0.15em #333, -0.02em 0.25em 0.15em #333;
}
.articleCard h2 {
  display: flex;
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
}
.articleCard:hover {
  cursor: pointer;
}
</style>
