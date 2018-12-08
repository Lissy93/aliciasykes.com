<template>
  <div id="app">

    <!-- Navigation Bar (show on all pages, except home screen) -->
    <NavBar 
      v-if="['home'].indexOf($route.name) < 0"
      siteTitle="Alicia Sykes"
      logoPath=""
      :navData="require('./data/nav-bar-content.json')"
    />

    <router-view/>
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  import NavBar from './components/NavBar.vue';

  @Component({
  components: {
    NavBar,
  },
})
export default class Home extends Vue {}

</script>


<style lang="scss">

@import url('../src/styles/base.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
