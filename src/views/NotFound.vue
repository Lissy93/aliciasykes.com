<template>
  <div class="not-found">
      <h3>404</h3>
      <span class="sub-title">The page you requested could not be found</span>
      <br>
      <span class="sub-sub-title">Sorry about that</span>
      <img class="sad-robot" src="/img/white-robot.png" alt="Robot | Alicia Sykes">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
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

    img.sad-robot {
      width: 250px;
      margin: 2em;
      float: right;

      @media #{$xs-devices-only} {
        width: 150px;
        float: none;
        margin: 1em auto;
        display: block;
      }
    }
  }

</style>
