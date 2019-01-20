<template>
  <div class="cv-page">
    <!--
                                    _   _       _a_a
                        _   _     _{.`=`.}_    {/ ''\_
                _    {.`'`.}   {.'  _  '.}  {|  ._oo)
                { \  {/ .-. \} {/  .' '.  \} {/  |
        ~~~~^~`~^~`~^~`~^~`~^~^~`^~^~`^~^~^~^~^~^~`^~~`
    -->

    <aside>
      <!-- Profile Picture -->
      <img 
        src="/img/profile-pictures/profile5.jpg" 
        alt="Alicia Sykes | Profile Picture"
        class="profile-picture" />

      <!-- Short Bio -->
      <div class="side-panel bio-panel">
        <h3>Bio</h3>
        <font-awesome-icon :icon="['far', 'user']" class="side-panel-icon" />
        <span>
          Experienced software engineer with broad development knowledge, 
          specialising in full-stack modern web development and native mobile apps. 
          Hardworking, adaptable and passionate about coding. Understands the 
          importance of clean, good quality and well tested code.
        </span>
      </div>

      <h3>Contact</h3>

      <!-- Current Location -->
      <div class="side-panel">
        <font-awesome-icon icon="map-marker" class="side-panel-icon"/>
        <span>London, UK</span>
      </div>

      <!-- Email Address -->
      <div class="side-panel">
        <font-awesome-icon :icon="['far', 'envelope']" class="side-panel-icon"/>
        <span>alicia@as93.net</span>
      </div>

      <!-- Phone Number -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fas', 'phone']" class="side-panel-icon"/>
        <span>07742922302</span>
      </div>

      <h3>Links</h3>

      <!-- Website -->
      <div class="side-panel">
        <font-awesome-icon :icon="['far', 'hand-pointer']" class="side-panel-icon"/>
        <a href="https://aliciasykes.com/" title="Alicia Sykes | Personal Website">
          aliciasykes.com
        </a>
      </div>

      <!-- GitHub -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'github']" class="side-panel-icon"/>
        <a href="https://github.com/lissy93" title="Alicia Sykes | GitHub">
         github.com/lissy93
        </a>
      </div>

      <!-- StackOverflow -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'stack-overflow']" class="side-panel-icon"/>
        <a href="https://stackoverflow.com/users/979052/lissy" title="Alicia Sykes | StackOverflow">
          stackoverflow.com/users/979052
        </a>
      </div>

      <!-- LinkedIn -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="side-panel-icon"/>
        <a href="https://www.linkedin.com/in/aliciasykes/" title="Alicia Sykes | LinkedIn">
          linkedin.com/in/aliciasykes
        </a>
      </div>

      <!-- KeyBase -->
      <div class="side-panel">
        <font-awesome-icon :icon="['fab', 'keybase']" class="side-panel-icon"/>
          <a href="https://keybase.io/aliciasykes" title="Alicia Sykes | KeyBase">
            keybase.io/aliciasykes
          </a>
      </div>

        
    </aside>

          
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


@Component({
  components: {
    Card,
    FontAwesomeIcon,
  },
})
export default class Cv extends Vue {}
</script>

<style lang="scss">

@import '../styles/media-queries.scss';

aside { 
  display: flex;
  flex-direction: column;
  background: #2196F3;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,0.14), 
    0 3px 1px -2px rgba(0,0,0,0.12), 
    0 1px 5px 0 rgba(0,0,0,0.2);
  
  @media #{$xs-devices-only} {
    width: 100%;
  }
  @media #{$small-devices-and-up} {
    width: 35%;
  }
  @media #{$medium-devices-and-up} {
    width: 30%;
  }
  @media #{$large-devices-and-up} {
    width: 25%;
  }

  img.profile-picture {
    max-width: 100%;
    margin: 0 auto;
  }

  h3 {
    flex: 0 0 100%;
    margin: 10px 5px 5px 5px;
    font-weight: normal;
    font-size: 1.8em;
    color: white;
  }

  .side-panel {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5em;
    color: white;

    .side-panel-icon {
      flex: 1;
      font-size: 30px;
      margin: 0 5px;
    }
    span, a {
      flex: 8;
      margin: 5px;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &.bio-panel {
      padding-top: 0;
      background: rgba(255,255,255,.4);
      box-shadow: 
        0 2px 2px 0 rgba(0,0,0,0.14),
        0 3px 1px -2px rgba(0,0,0,0.12),
        0 1px 5px 0 rgba(0,0,0,0.2);
    }
  }
}

</style>

