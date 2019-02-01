<template>
  <div class="not-found">
      <h3>404</h3>
      <span class="sub-title">The page you requested could not be found</span>
      <br>
      <span class="sub-sub-title">Sorry about that</span>
      <img class="sad-robot" src="/img/white-robot.png" alt="Robot | Alicia Sykes">
      <router-link to="/home">
        <PrimaryButton bgColor="#FFF" textColor="#E53935" class="return-home-button">Return to Home</PrimaryButton>
      </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PrimaryButton from '@/components/PrimaryButton.vue';


@Component({
  components: {
    PrimaryButton,
  },
})
export default class NotFound extends Vue {}

</script>


<style lang="scss" scoped>

  @import '../styles/media-queries.scss';

  .not-found {
    position: absolute;
    height: 95%;
    width: 100%;
    background: #e53935;

    h3 {
      font-size: 8em;
      text-align: center;
      color: white;
      @media #{$xs-devices-only} {
        margin-top: 0.1em;
      }
    }

    span {
      text-align: center;
      color: white;
      display: block;
    }

    span.sub-title {
      font-size: 3em;
    }

    span.sub-sub-title {
      font-size: 1.5em;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2em;
    }

    .return-home-button {

    }

    img.sad-robot {
      width: 250px;
      margin: 2em;
      position: absolute;
      right: 1em;
      bottom: 0;

      @media #{$xs-devices-only} {
        width: 150px;
        margin: 1em auto;
        display: block;
        position: relative;
      }

       @media(max-height:800px) {
         display: none;
       }
    }
  }

</style>
