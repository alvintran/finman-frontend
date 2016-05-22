<template>
  <div id="app">
    <nav class="uk-navbar">
      <a href="#" class="uk-navbar-brand uk-navbar-center">FINMAN</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'

export default {
  store
}
</script>
