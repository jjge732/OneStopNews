<template>
  <div>
    <NavBar v-bind:sections='sections' v-on:update:activeSection='getSection'/>
    <Container v-bind:articles='articles'/>
    <!-- <span>Photo by Jason Blackeye on Unsplash -->
    <img id='backgroundImage' src='./assets/background_image.jpg'/>
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
#backgroundImage {
  top: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
