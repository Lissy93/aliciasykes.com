<template>
  <div id="vonoroi"></div>
</template>

<script lang="js">

import * as d3 from 'd3';

import { Component, Prop, Vue } from 'vue-property-decorator';

import D3Voronoi from '../helpers/voronoi.ts';

// Colors

const primaryStroke = '';
const secondryStroke = '';
const dotOutline = '';
const dotFill = '';
const selectedDotOutline = '';
const selectedDotFill = '';
const segmentFill = [
  '#47ffca',
  '#41f2bf',
  '#51f7c7',
  '#4cffcb',
  '#44fcc6',
  '#40edba',
  '#43f2be',
  '#47ffc8',
  '#42f7c1',
  '#45f7c2',
];

@Component({
    mounted() {
      new D3Voronoi();
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