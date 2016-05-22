<template>
  <form id="new-board-form" class="uk-form uk-form-stacked uk-clearfix">
    <div class="uk-form-row">
      <label class="uk-form-label" for="board-name">Board name <font class="uk-text-danger">*</font></label>
      <div class="uk-form-controls">
        <input type="text" id="board-name" class="uk-width-1-1 uk-form-large" placeholder="Enter the board name" required>
      </div>
    </div>
    <div class="uk-form-row">
      <label class="uk-form-label" for="board-desc">Board description</label>
      <div class="uk-form-controls">
        <textarea id="board-desc" class="uk-width-1-1 uk-form-large" placeholder="Enter the board description"></textarea>
      </div>
    </div>
    <div class="uk-form-row">
      <button class="uk-button uk-button-success" @click.prevent="doCreateBoard()">
        <i class="uk-icon-check"></i>
        Create board
      </button>
    </div>
    <hr>
  </form>
</template>

<script>
  import { createBoard } from '../vuex/actions'
  export default {
    vuex: {
      getters: {
        isShowCreating: ({board}) => board.isShowCreating
      },
      actions: {
        createBoard
      }
    },

    methods: {
      doCreateBoard () {
        const board = {
          name: document.getElementById('board-name').value,
          description: document.getElementById('board-desc').value,
          owner_id: 1
        }
        if (board.name) {
          this.createBoard(board)
        } else {
          window.alert('Enter your board name')
          document.getElementById('board-name').focus()
        }
      }
    }
  }
</script>

<style type="text/css">
  #new-board-form {margin-top: 10px;}
</style>
