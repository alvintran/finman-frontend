<template>
  <div class="uk-grid uk-grid-medium">
    <div class="uk-width-2-4 uk-container-center">
      <div class="uk-clearfix">
        <h1 class="uk-float-left">Board list</h1>
        <button id="new-board" class="uk-button uk-float-right" @click="showBoardForm">
          <i class="uk-icon-plus"></i>
          New board
        </button>
      </div>
      <hr>
      <board-form v-show="isShowCreating"></board-form>
      <board-list></board-list>
    </div>
  </div>
</template>

<script>
  import BoardForm from './BoardForm'
  import BoardList from './BoardList'
  import { showBoardForm } from '../vuex/actions'
  export default {
    vuex: {
      getters: {
        isShowCreating: ({board}) => board.isShowCreating
      },
      actions: {
        showBoardForm
      }
    },
    components: {
      BoardForm,
      BoardList
    }
  }
</script>

<style type="text/css">
  h1 {margin-bottom: 0; margin-top: 10px;}
  #new-board {margin-top: 18px;}
</style>
