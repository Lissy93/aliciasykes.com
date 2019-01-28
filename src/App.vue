<template>
  <div id="app">

    <div class="wrapper">

    <!-- The GitHub corner link -->  
    <ForkMe 
      v-if="['cv'].indexOf($route.name) < 0"
      hoverTitle="I built this site with Vue. Check out the source code on GitHub!"
      githubUrl="https://github.com/Lissy93/alicia-sykes-website"
      forgroundCol="#e53935"
      backgroundCol="#2c3e50"
    />

    <!-- Navigation Bar (show on all pages, except home screen) -->
    <NavBar 
      v-if="['home', 'cv', '404', 'blog'].indexOf($route.name) < 0"
      siteTitle="Alicia Sykes"
      logoPath=""
      :navData="require('./data/nav-bar-content.json')"
    />

    <router-view/>

    <!-- Magic Trick for Stickey Footer -->
    <div class="push" />

    </div> <!--End Wrapper -->

    <Footer 
      :footerData="require('./data/footer-content.json')"
    />
  </div>
</template>

<script lang="ts">

  import { Component, Vue } from 'vue-property-decorator';

  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  import ForkMe from './components/ForkMe.vue';

  /** Import Font Awesome */
  import { library, IconPack } from '@fortawesome/fontawesome-svg-core';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import { far } from '@fortawesome/free-regular-svg-icons';

  library.add(fab, fas, (far as IconPack));

  @Component({
  components: {
    NavBar,
    Footer,
    ForkMe,
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
  color: #2c3e50;
  background: #ebebeb;
}

.wrapper {
  min-height: 99%;
  margin-bottom: -3em ;
}
.footer, .push {
  min-height: 3em;
  font-size: 0.8em;
}
</style>
