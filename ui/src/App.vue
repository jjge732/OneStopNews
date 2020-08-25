<template>
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  color: #555;
  display: flex;
}
</style>
