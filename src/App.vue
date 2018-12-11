<template>
  <div id="app">

    <div class="wrapper">

    <!-- Navigation Bar (show on all pages, except home screen) -->
    <NavBar 
      v-if="['home'].indexOf($route.name) < 0"
      siteTitle="Alicia Sykes"
      logoPath=""
      :navData="require('./data/nav-bar-content.json')"
    />

    <router-view/>

    <!-- Magic Trick for Stickey Footer -->
    <div class="push" />

    </div> <!--End Wrapper -->

    <Footer />
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';

  @Component({
  components: {
    NavBar,
    Footer,
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

.wrapper {
  min-height: 100%;
  margin-bottom: -3em ;
}
.footer, .push {
  min-height: 3em;
  font-size: 0.8em;
}
</style>
