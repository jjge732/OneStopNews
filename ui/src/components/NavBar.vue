<template>
  <div id="navBar">
    <a v-on:click="changeSection('home')" id=title >
      One Stop News
    </a>
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
  display: grid;
  justify-content: space-evenly;
  text-align: center;
  position: fixed;
  height: 8vh;
  width: 100vw;
}
#title {
  grid-column: 1 / 4;
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
