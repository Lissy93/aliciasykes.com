<template>
  <div id="vonoroi" :style="heightProperty">
    <slot></slot>
  </div>
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
        return `height: ${this.height ? this.height : '100%' }`;
      },
    },
})

export default class Voroni extends Vue {}

</script>


<style lang="scss">

  #vonoroi{
     box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  }

    /* Vonoroi Chart Colors */
    $col-lines:  #c80000;
    $col-initial-primary-fill:  #E53935;
    $col-selected-polygon: #c80000;
    $col-selected-site-fill:  #c80000;
    $col-selected-site-stroke:  #c80000;
    $col-sites-fill: none;
    $col-sites-line:  #E53935;

    #vonoroi {
      background-color: $col-initial-primary-fill;
    }

  @import '../styles/voronoi-styles.scss';
</style>