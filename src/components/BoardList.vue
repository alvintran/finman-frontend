<template>
  <p v-show="loading"><i class="uk-icon-spinner uk-icon-spin"></i></p>
  <div class="uk-alert" v-show="message">
    {{ message }}
  </div>
  <ul v-show="boards.length > 0">
    <li v-for="b in boards">
      {{ b.name }}
      <span>{{ b.created }}</span>
    </li>
  </ul>
</template>

<script>
  import { getAllBoards } from '../vuex/actions'
  export default {
    vuex: {
      getters: {
        boards: ({ board }) => board.all,
        loading: ({board}) => board.loading,
        message: ({board}) => board.message
      },
      actions: {
        getAllBoards
      }
    },
    created () {
      this.getAllBoards()
    }
  }
</script>
