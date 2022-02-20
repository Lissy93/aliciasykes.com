<template>
  <footer v-if="footerData">
      
      <!-- Cookie Banner -->
      <cookie-law theme="blood-orange">
          <div slot="message">
            <span class="Cookie__content">
                This website uses cookies to ensure you get the best browsing experience.
                <router-link to="legal">More Info</router-link>.
            </span>
        </div>
      </cookie-law>

      <!-- Footer Content -->
      <div class="footer-item" v-for="footerItem in footerData" v-bind:key="footerItem.name">
        <a :href="footerItem.url">{{ footerItem.name }}</a>
      </div>
  </footer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import CookieLaw from 'vue-cookie-law';

@Component({
    props: [
        'footerData',
    ],
     components: {
         CookieLaw,
     },
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
        padding-top: 0.1em;

        .footer-item {
            flex-grow: 1;
            padding: 1em;
            min-width: 100%;
            color: #2c3e50;
            text-align: center;
            @media (min-width: 769px) {
                min-width: 10em;
            }
            a {
                color: #2c3e50;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
</style>

<style lang="scss">
// Cookie Banner
.Cookie--blood-orange {
    background: #2c3e50;
    padding: 10px;
    .Cookie__content, .Cookie__content a {
        color: #FFF;
        margin: 0;
    }
    .Cookie__button {
        background: #e53935;
    }
    .Cookie__button:hover {
        background: #E76A68;
    }
}
</style>