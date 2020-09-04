<template>
  <div id="navBar">
    <div id=title >
      <a v-on:click='changeSection("home")'>One Stop News</a>
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

<style>
#navBar {
  grid-row: 1;
  display: grid;
  text-align: center;
  width: 100vw;
  color: #fcfcfc;
}
#title {
  grid-column: 1 / 7;
  grid-row: 1;
  font-weight: 700;
  text-shadow: 0 .025em .15em #888, 0 0.10em 0.15em #888;
  font-size: 3em;
  margin-top: 10px;
  padding-bottom: 15px;
}
#title a:hover {
  cursor: pointer;
}
</style>
