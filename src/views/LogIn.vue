<template>
    <div class="login-wrapper">
        <h2>Log In</h2>
        <input class="login-field" type="text" placeholder="Username" ref="username">
        <input class="login-field" type="password" placeholder="Password" ref="password">
        <button @click="login">Login</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    methods: {
        login: () => {
            // Auth tokens injected
        },
    },
    head: {
        title: {
            inner: 'Log In',
        },
    },
})
export default class LogIn extends Vue {}

</script>


<style lang="scss" scoped>
    h2 {
        font-size: 3em;
    }
   input, button {
    max-width: 450px;
    margin: 1rem auto;
    padding: 0.5rem 0.8rem;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 1.2rem;
  }
  input {
    background: #FFF;
    color: #e53935;
  }
  button {
    background: #e53935;
    color: #FFF;
    cursor: pointer;
  }
  .login-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
