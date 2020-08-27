<template>
  <div class='sectionHeading' v-bind:id='sectionName'>
      <h1>{{ sectionName }}</h1>
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
  border-top: 2px solid #555;
  border-bottom: 2px solid #555;
  border-left: .5px solid #555;
  border-right: .5px solid #555;
}
.sectionHeading:hover {
  cursor: pointer;
}
.sectionHeading h1 {
  text-shadow: .1em .05em .15em #888;
  padding-bottom: .1em;
  text-transform: capitalize;
}
</style>
