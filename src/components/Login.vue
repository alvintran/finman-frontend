<template>
  <div class="uk-grid uk-grid-medium">
    <div class="uk-width-2-4 uk-container-center">
      <form id="login-form" class="uk-form uk-form-stacked uk-clearfix">
        <div class="uk-alert" v-show="message">
          {{ message }}
        </div>
        <div class="uk-form-row">
          <label class="uk-form-label" for="email">Login email <font class="uk-text-danger">*</font></label>
          <div class="uk-form-controls">
            <input type="text" id="email" class="uk-width-1-1 uk-form-large" placeholder="Enter your login email">
          </div>
        </div>
        <div class="uk-form-row">
          <label class="uk-form-label" for="password">Password <font class="uk-text-danger">*</font></label>
          <div class="uk-form-controls">
            <input type="password" id="password" class="uk-width-1-1 uk-form-large" placeholder="Enter your password">
          </div>
        </div>
        <div class="uk-form-row">
          <button class="uk-button uk-button-success" @click.prevent="doLogin()">
            <i class="uk-icon-spinner uk-icon-spin" v-show="loading"></i>
            <i class="uk-icon-sign-in" v-show="!loading"></i>
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { login } from '../vuex/actions'
  export default {
    vuex: {
      getters: {
        loading: ({login}) => login.loading,
        message: ({login}) => login.message,
        credentials: ({login}) => login.credentials
      },
      actions: {
        login
      }
    },

    methods: {
      doLogin () {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        if (email && password) {
          this.login({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            owner_id: 1
          })
        } else {
          window.alert('Enter your credentials into form below!')
          document.getElementById('email').focus()
        }
      }
    }
  }
</script>

<style>
  #login-form {margin-top: 20px;}
</style>
