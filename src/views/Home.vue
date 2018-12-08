<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Hero from '@/components/Hero.vue';

@Component({
  components: {
    HelloWorld,
    Hero,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

  .home{
    height: 100%;
  }

  h1, h2, h3, h4, h5{
    @import url('https://fonts.googleapis.com/css?family=Text+Me+One');
    font-family: 'Text Me One', sans-serif;
  }
</style>

