<template>
  <div class="contact-page">
        
    <h2>Contact</h2>

    <div class="error" v-if="showError && !mailSent">
      Please fill in all required fields.
    </div>

    <div v-if="!mailSent" class="mail-form">
      <input class="contact-field" type="text" placeholder="Full Name" ref="fullName">
      <input class="contact-field" type="email" placeholder="Email Address" ref="emailAddress">
      <textarea class="contact-field" type="text" placeholder="Your Message" ref="userMessage"></textarea>
      <button @click="sendMail">Send</button>
    </div>

    <div v-if="mailSent" class="mail-sent">
      Your message has been sent. Please allow 48 hours for a reply.
    </div>
        
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: {
    Card,
  },
  head: {
    title: {
      inner: 'Contact',
    },
  },
  data() {
    return {
      showError: false,
      mailSent: false,
    };
  },
  methods: {
    sendMail() {
      const fullName = (this.$refs.fullName as any).value;
      const emailAddress = (this.$refs.emailAddress as any).value;
      const userMessage = (this.$refs.userMessage as any).value;

      if (fullName && emailAddress && userMessage) {

        // Prepare the message
        const serviceId = 'gmail';
        const templateId = 'website-contact-form';
        const templateParams = {
          from_name: fullName,
          reply_email: emailAddress,
          message_body: userMessage,
        };

        // Send the message
        (window as any).emailjs.init('user_K6F041q1dQvz8SJLSOZCR');
        (window as any).emailjs.send(serviceId, templateId, templateParams);

        // Update the UI
        (this as any).mailSent = true;
      } else {
        // User missed out some fields- don't send email
        (this as any).showError = true;
      }
    },
  },
})
export default class Contact extends Vue {
  public $refs!: {
    fullName: HTMLFormElement,
  };
}
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
    color: #FFF;
  }

  .mail-form {
    display: flex;
    flex-direction: column;
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

  .error, .mail-sent {
    margin: 0 auto;
    padding: 1em;
    color: #FFF;
    border: 2px solid;
    border-radius: 4px;
  }

  
}

</style>

