<template>
    <header v-click-outside="closeAllDropdowns">

      <!-- Burger menu for mobile-->
      <Burger class="bigmac" @onBurgerChange="onBurgerChange" :startIsMenuOpen="isMenuOpen"/>

      <!-- Main Logo and Title -->
      <h1 class="logo">
          <router-link to="/">
            <img 
              v-if="logoPath"
              :src="logoPath"
              :alt="siteTitle"
              v-click-outside="closeAllDropdowns"
            />
            {{ siteTitle }}
          </router-link>
        </h1>

        <!-- Main Navigation -->
        <nav>
          <ul class="main-nav" v-bind:class="{ menuOpen: isMenuOpen }">
            <li v-for="navBarItem in navBarItems" v-bind:key="navBarItem.name" @mouseover="visibleDropdown = navBarItem.name">
              <router-link :to="navBarItem.path">{{navBarItem.name}}</router-link>
              <ul class="sub-nav" v-bind:class="{ open: visibleDropdown == navBarItem.name }"  @mouseleave="closeAllDropdowns">
                <li v-for="navBarItemChild in navBarItem.children" v-bind:key="navBarItemChild.name">
                  <router-link :to="navBarItemChild.path">{{navBarItemChild.name}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import NavBarItems from './../models/NavBarItems';
import Burger from './Burger.vue';

// tslint:disable:no-var-requires // Will I go to hell for this?
const ClickOutside = require('./../directives/ClickOutside.js');
// tslint:enable:no-var-requires // Probably, but it was worth it.

@Component({
    props: [
      'siteTitle', // Heading, shown in top left of navbar
      'logoPath', // Optiopnal path to site logo, shown in top left
      'navData', // The JSON of navbar content, will make up all the links
    ],
    data: () => {
        return {
        visibleDropdown: '',
        isMenuOpen: false, // start closed
        };
    },
    computed: {
          navBarItems() {
            if (this.$props.navData) {
              return (new NavBarItems()).makeTheFuckingNavbar(this.$props.navData);
            } else {
              return [];
            }
          },
    },
    methods: {
        closeAllDropdowns() {
        this.$data.visibleDropdown = '';
        },
        onBurgerChange(openOrClose) {
        this.$data.isMenuOpen = openOrClose;
        },
    },
    directives: {
        ClickOutside,
    },
    components: {
        Burger,
    },
})
export default class NavBar extends Vue {}
</script>

<style lang="scss">
  @import '../styles/navbar-styles.scss';
</style>