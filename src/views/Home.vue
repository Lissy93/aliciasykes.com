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

<style lang="scss" scoped>
  .home{
    height: 100%;
  }
</style>

