<template>
  <div class="hero">
    <Voroni />
    <span>This is the hero component</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Voroni from '@/components/Voroni.vue';

@Component({
  components: {
    Voroni,
  },
})
export default class Hero extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .hero{
      height: 100%;
    }
</style>
