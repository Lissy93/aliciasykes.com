<template>
  <div class="home">
    <Hero />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hero from '@/components/Hero.vue';

@Component({
  components: {
    Hero,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">

</style>

