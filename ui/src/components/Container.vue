<template>
  <div id='container' >
    <div class="loadingio-spinner-eclipse-l6ntpz8oc5" v-if='articles === null' >
      <div class="ldio-eq6pp60h57j" />
    </div>
    <ArticleCard v-else v-for='article in articles' :key='article.title' v-bind:article='article' v-bind:isLoading='isLoading'/>
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
  components: {
    ArticleCard
  }
}
</script>

<style scoped>
#container {
  grid-row: 2;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em 0;
}
.ldio-eq6pp60h57j {
  position: absolute;
  width: 100px;
  height: 100px;
  box-sizing: content-box;
  border-radius: 50%;
  box-shadow: 0 6.4px 0 0 #5b81e1;
  transform-origin: 80px 83.2px;
}
.loadingio-spinner-eclipse-l6ntpz8oc5 {
  animation: ldio-eq6pp60h57j 1s linear infinite;
  margin-top: 40px;
  width: 300px;
  height: 300px;
  display: inline-block;
  background: rgba(0, 0, 0, 0);
}
.ldio-eq6pp60h57j {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
}

@keyframes ldio-eq6pp60h57j {
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
}
</style>
