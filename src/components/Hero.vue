<template>
  <div class="hero">
    
    <!-- Voronoi chart, and Home page title -->
    <Voroni height="350px">
      <div class="screen-calculated-width site-title-intro">
        <h1>Alicia Sykes</h1>
        <h2>Software Engineer</h2>
      </div>
    </Voroni>

    <!-- Initial main buttons -->
    <div class="primary-button-container">
      <router-link to="/about">
        <PrimaryButton bgColor="#E53935" textColor="#FFF">About</PrimaryButton>
      </router-link>
      <router-link to="/portfolio">
        <PrimaryButton bgColor="#E53935" textColor="#FFF">Work</PrimaryButton>
      </router-link>
      <router-link to="/contact">
        <PrimaryButton bgColor="#E53935" textColor="#FFF">Contact</PrimaryButton>
      </router-link>
    </div>

    <!-- Smaller Links -->
    <div class="animated-link-container">
      <AnimatedLink icon="github" href="https://github.com/Lissy93" title="GitHub | Alicia Sykes">Code</AnimatedLink>
      <AnimatedLink icon="stack-overflow" href="https://stackoverflow.com/users/979052" title="StackOverflow | Alicia Sykes">Answers</AnimatedLink>
      <AnimatedLink icon="twitter" href="https://twitter.com/Lissy_Sykes" title="Twitter | Alicia Sykes">Tweets</AnimatedLink>
      <AnimatedLink icon="medium" href="https://notes.aliciasykes.com" title="Medium | Alicia Sykes">Writings</AnimatedLink>
      <AnimatedLink icon="linkedin" href="https://www.linkedin.com/in/aliciasykes" title="LinkedIn | Alicia Sykes">Experience</AnimatedLink>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Voroni from '@/components/Voroni.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import AnimatedLink from '@/components/AnimatedLink.vue';

@Component({
  components: {
    Voroni,
    PrimaryButton,
    AnimatedLink,
  },
})
export default class Hero extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    @import '../styles/media-queries.scss';

    .primary-button-container{
      flex-flow: column wrap;
      a {
        text-decoration: none;
      }
    }

    @media #{$small-devices-and-up} {
      .primary-button-container{
        flex-flow: row wrap;
      }
    }

    .primary-button-container{
      margin: 2em;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .animated-link-container{
      margin: 2em;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .site-title-intro {
      position: absolute;
      display: block;
      margin: 0 auto;
      top: 12.5%;
      color: #FFF;
      line-height: 0.75;
      border-radius: 20px;
      h1 {
        font-size: 4rem;
        letter-spacing: 2px;
      }
      h2 {
        font-size: 2rem;
      }
    }

    .screen-calculated-width{
      width: 100%;
      left: 0;
    }

    @media #{$small-devices-and-up} {
      .screen-calculated-width {
        width: 60%;
        left: 20%;
      }
    }

    @media #{$medium-devices-and-up} {
      .screen-calculated-width {
        width: 50%;
        left: 25%;
      }
    }

    @media #{$large-devices-and-up} {
      .screen-calculated-width {
        width: 40%;
        left: 30%;
      }
    }

    @media #{$xl-devices-and-up} {
      .screen-calculated-width {
        width: 30%;
        left: 35%;
      }
    }

  .hide {
    display: none;
  }
    
</style>
