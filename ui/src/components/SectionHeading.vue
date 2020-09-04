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
  border-top: 2px solid rgba(360, 360, 360, .7);
  border-bottom: 2px solid rgba(360, 360, 360, .7);
}
.sectionHeading:hover {
  cursor: pointer;
}
.sectionHeading h1 {
  text-shadow: .1em .05em .15em #888, -0.01em 0.15em 0.15em #888;
  padding-bottom: .05em;
  text-transform: capitalize;
}
@media only screen and (max-width: 800px) {
  .sectionHeading {
    font-size: 1.25em;
  }
}
@media only screen and (max-width: 500px) {
  .sectionHeading {
    font-size: 1em;
  }
}
</style>
