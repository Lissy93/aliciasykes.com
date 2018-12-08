<template>
  <div class="primary-button" :style="`${bgColorProp}; ${textColorProp}`">
      <slot></slot>
  </div>
</template>

<script lang="js">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    props: [
      'bgColor',
      'textColor',
    ],
    computed: {
      bgColorProp() {
        return `background-color: ${this.bgColor ? this.bgColor : '#d1d1d1' }`;
      },
      textColorProp() {
        return `color: ${this.textColor ? this.textColor : '#000' }`;
      },
    },
})
export default class PrimaryButton extends Vue {}
</script>


<style scoped lang="scss">
    .primary-button{
      font-size: 1.5rem;
      border-radius: 3px;
      margin: 0.5em 1em;
      cursor: pointer;
      padding: 0.5em 1em;
      text-decoration: none;
      box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2);
      &:hover{
        opacity: 0.95;
        box-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.2);
      }
    }
</style>
