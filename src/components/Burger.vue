<template>
    <div class="bigmac" v-bind:class="{ open: isMenuOpen }" v-on:click="onBurgerChange(!isMenuOpen)">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  // tslint:disable-next-line:object-literal-shorthand
  data: function() {
    return {
      isMenuOpen: this.$props.id, // Start closed
    };
  },
  methods: {
    onBurgerChange(toWhat: boolean) {
      this.$data.isMenuOpen = !this.$data.isMenuOpen;
      this.$emit('onBurgerChange', toWhat);
    },
  },
})

export default class Burger extends Vue {
      @Prop() private startIsMenuOpen!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$burgerSize: 1em;

.bigmac{
  max-width: $burgerSize * 2;
  height: $burgerSize;
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.bigmac span {
  display: block;
  position: absolute;
  height: calc($burgerSize / 4);
  width: 100%;
  background: #ee6373;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.bigmac span:nth-child(1) {
  top: 0;
}

.bigmac span:nth-child(2),.bigmac span:nth-child(3) {
  top: calc($burgerSize / 2);
}

.bigmac span:nth-child(4) {
  top: $burgerSize;
}

.bigmac.open span:nth-child(1) {
  top: $burgerSize;
  width: 0%;
  left: 50%;
}

.bigmac.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

.bigmac.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.bigmac.open span:nth-child(4) {
  top: calc($burgerSize / 2);
  width: 0%;
  left: 50%;
}
</style>
