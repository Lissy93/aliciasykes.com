<template>
  <div class="cv-page">
    <!--
                                    _   _       _a_a
                        _   _     _{.`=`.}_    {/ ''\_
                _    {.`'`.}   {.'  _  '.}  {|  ._oo)
                { \  {/ .-. \} {/  .' '.  \} {/  |
        ~~~~^~`~^~`~^~`~^~`~^~^~`^~^~`^~^~^~^~^~^~`^~~`
    -->

    <aside>
      <img src="https://via.placeholder.com/150" alt="">
    </aside>

          
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import VueGrid from '@liqueflies/vue-flex-grid';


@Component({
  components: {
    Card,
    VueGrid,
  },
})
export default class Cv extends Vue {}
</script>

<style lang="scss">

@import '../styles/media-queries.scss';

aside { 
  @media #{$xs-devices-only} {
    width: 100%;
  }
  @media #{$small-devices-and-up} {
    width: 25%;
  }
  @media #{$medium-devices-and-up} {
    width: 20%;
  }
  @media #{$large-devices-and-up} {
    width: 15%;
  }
}

</style>

