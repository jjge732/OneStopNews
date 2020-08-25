<template>
  <div id="navBar">
    <a v-on:click="goToPage('home')"  id=title >
      One Stop News
    </a>
    <Page v-bind:isActive=false pageName=Sports v-on:click="goToPage('sports')"/>
    <Page v-bind:isActive=false pageName=Politics v-on:click="goToPage('politics')"/>
  </div>
</template>

<script>
import Page from './Page';

export default {
  name: 'NavBar',
  props: {
    msg: String
  },
  components: {
    Page
  },
  methods: {
    goToPage: function (pageName) {
      alert(`Going to page ${pageName}`)
    }
  }
}
</script>

<style scoped>
#navBar {
  display: grid;
  grid-auto-columns: 1fr;
  justify-content: space-evenly;
  text-align: center;
  position: fixed;
  height: 8vh;
  width: 100vw;
}
#title {
  grid-column: 1 / 3;
  grid-row: 1;
  font-weight: 700;
  font-size: 5em;
  margin-top: 10px;
  margin-bottom: 20px;
}
#title:hover {
  cursor: pointer;
}
</style>
