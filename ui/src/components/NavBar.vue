<template>
  <div id="navBar">
    <div id=title >
      <a v-on:click="changeSection('home')">One Stop News</a>
    </div>
    <SectionHeading v-for='section in sections' :key='section.name' v-bind:sectionName='section.name' v-on:click='changeSection(section.name)' />
  </div>
</template>

<script>
import SectionHeading from './SectionHeading';

export default {
  name: 'NavBar',
  props: {
    sections: Array
  },
  components: {
    SectionHeading
  },
  methods: {
    changeSection: function (sectionName) {
      this.$emit('update:activeSection', sectionName);
    }
  }
}
</script>

<style >
#navBar {
  grid-row: 1;
  display: grid;
  text-align: center;
  width: 100vw;
}
#title {
  grid-column: 1 / 4;
  grid-row: 1;
  font-weight: 700;
  text-shadow: 0.1em 0.05em 0.15em #888;
  font-size: 5em;
  margin-top: 10px;
  padding-bottom: 10px;
}
#title a:hover {
  cursor: pointer;
}
</style>
