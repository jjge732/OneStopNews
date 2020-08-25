<template>
  <div class='page' v-bind:id='{pageName}'>
      {{ pageName }}
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    pageName: String,
    isActive: Boolean
  }
}
</script>

<style scoped>
.page {
  grid-row: 2;
  grid-column: span 1;
  font-size: 2em;
}
.page:hover {
  cursor: pointer;
}
</style>
