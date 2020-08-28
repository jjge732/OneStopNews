<template>
  <div>
    <NavBar v-bind:sections='sections' v-on:update:activeSection='getSection'/>
    <Container v-bind:articles='articles'/>
  </div>
</template>

<script>
import API from './api';
import Container from './components/Container';
import NavBar from './components/NavBar';

export default {
  name: 'Home',
  data() {
    return {
      sections: [
        {name: 'books'}, 
        {name: 'business'},
        {name: 'fashion'},
        {name: 'politics'},
        {name: 'science'},
        {name: 'technology'}
      ],
      articles: null,
      isLoading: true
    }
  },
  created: function() {
    this.getSection('home');
  },
  methods: {
    getSection(activeSection) {
      this.articles = null;
      API.getArticlesMetaData(activeSection)
        .then(response => {
          this.articles = new Array(...response.data);
        })
        .catch(err => console.log(err));
    }
  },
  components: {
    Container,
    NavBar
  }
}
</script>

<style>
#app {
  color: #555;
  display: grid;
  box-sizing: border-box;
  background-color: #ddd;
}
</style>
