<template>
  <div class='sectionHeading' v-bind:id='sectionName'>
      {{ sectionName }}
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    sectionName: String,
    isActive: Boolean
  }
}
</script>

<style scoped>
.sectionHeading {
  grid-row: 2;
  grid-column: span 1;
  font-size: 2em;
}
.sectionHeading:hover {
  cursor: pointer;
}
</style>
