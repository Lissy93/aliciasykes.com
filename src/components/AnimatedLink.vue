<template>
  <a class="animated-link" :style="`${textColorProp}`" :href="href" :title="title">    
    <font-awesome-icon v-if="icon" :icon="['fab', icon]" class="social-icon" />
    <slot></slot>
  </a>
</template>

<script lang="js">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

@Component({
    props: [
        'href',
        'title',
        'icon',
        'textColor',
    ],
    computed: {
      textColorProp() {
        return `color: ${this.textColor ? this.textColor : '#000' }`;
      },
    },
    components: {
        FontAwesomeIcon,
    },
})
export default class AnimatedLink extends Vue {}
</script>


<style scoped lang="scss">

    .social-icon{
      margin: 0 0.2em;
    }

    .animated-link {
      position: relative;
      margin: 0.5em 1em;
      outline: none;
      text-decoration: none;
      text-shadow: 0 0 1px rgba(255,255,255,0.3);
      font-size: 1.35em;
      padding: 0.5rem 0;
      color: #E53935;
    }

    .animated-link:hover,
    .animated-link:focus {
      outline: none;
    }

    .animated-link::after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 4px;
      background: lighten($color: #E53935, $amount: 3);
      content: '';
      opacity: 0;
      -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
      -moz-transition: opacity 0.3s, -moz-transform 0.3s;
      transition: opacity 0.3s, transform 0.3s;
      -webkit-transform: translateY(10px);
      -moz-transform: translateY(10px);
      transform: translateY(10px);
    }

    .animated-link:hover::after,
    .animated-link:focus::after {
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      transform: translateY(0px);
    }
</style>
