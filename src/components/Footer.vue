<template>
  <footer v-if="footerData">
      <div class="footer-item" v-for="footerItem in footerData" v-bind:key="footerItem.name">
        <a :href="footerItem.url" v-html="footerItem.name" />
      </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    props: [
        'footerData',
    ],
})
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
    footer {
        width: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden; 
        margin: 0;
        background: #d0d0d0;
        display: flex;
        flex-wrap: wrap;
        font-family: 'Raleway', sans-serif;
        padding-top: 0.15em;

        .footer-item {
            flex-grow: 1;
            padding: 1em;
            min-width: 100%;
            color: #2c3e50;
            @media (min-width: 769px) {
                min-width: 10em;
            }
            a{
                color: #2c3e50;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
</style>
