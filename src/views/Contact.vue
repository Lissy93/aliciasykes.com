<template>
  <div class="contact-page">
        
    <h2>Contact</h2>

    <input class="contact-field" type="text" placeholder="Full Name">
    <input class="contact-field" type="email" placeholder="Email Address">
    <textarea class="contact-field" type="text" placeholder="Your Message"></textarea>
    <button>Send</button>
        
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class Contact extends Vue {}
</script>

<style lang="scss">

@import '../styles/media-queries.scss';

.contact-page {
  background: #e53935;
  min-height: 500px;
  margin-top: -1.4em;
  display: flex;
  flex-direction: column;
  padding: 1em;

  h2 {
    font-size: 3rem;
  }

  input, textarea, button {
    max-width: 450px;
    margin: 1rem auto;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 1.2rem;
    background: #FFF;
    color: #e53935;
  }

  textarea {
    height: 8em;
  }

  button {
    
    
  }
  

  @media #{$xs-devices-only} {
      input, textarea, button {
        width: 80%;
      }
    }

    @media #{$small-devices-and-up} {
      input, textarea, button {
        width: 500px;
      }
    }

  h2 {
    color: #FFFFFF;
  }

  
}

</style>

