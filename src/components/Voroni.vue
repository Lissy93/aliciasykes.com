<template>
  <div id="vonoroi" :style="heightProperty"></div>
</template>

<script lang="js">

import * as d3 from 'd3';

import { Component, Prop, Vue } from 'vue-property-decorator';

import D3Voronoi from '../helpers/voronoi.ts';

@Component({
    mounted() {
      const voronoi = new D3Voronoi();
    },
    props: ['height'],
    computed: {
      heightProperty() {
        return `height: ${this.height ? this.height : '50%' }`;
      },
    },
})

export default class Voroni extends Vue {}

</script>


<style lang="scss">

  #vonoroi{
    height: 50%;
  }

    /* Vonoroi Chart Colors */
    $col-lines:  #80f2e4;
    $col-initial-primary-fill:  #24d3ff;
    $col-selected-polygon: #8b80f2;
    $col-selected-site-fill:  #80f2e4;
    $col-selected-site-stroke:  #80f2e4;
    $col-sites-fill: none;
    $col-sites-line:  #80f2e4;

  @import '../styles/voronoi-styles.scss';
</style>