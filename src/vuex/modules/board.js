import {
  BOARD_REQUEST,
  BOARD_SUCCESS,
  BOARD_FAIL,
  BOARD_CREATING_REQUEST,
  BOARD_CREATING_SUCCESS,
  BOARD_CREATING_FAIL,
  SHOW_BOARD_CREATING
} from '../mutation-types'

const state = {
  all: [],
  loading: false,
  message: '',
  isShowCreating: false
}

export const mutations = {
  [BOARD_REQUEST] (state) {
    state.loading = true
  },

  [BOARD_SUCCESS] (state, boards) {
    state.loading = false
    if (!boards.data.data.length) {
      state.message = 'You have not board yet. Create a board to get started!'
    }
    state.all = boards.data.data
  },

  [BOARD_FAIL] (state, error) {
    state.loading = false
    state.message = error.data.error
  },

  [BOARD_CREATING_REQUEST] (state) {
    state.loading = true
  },

  [BOARD_CREATING_SUCCESS] (state, board) {
    state.isShowCreating = false
    state.loading = false
    state.message = 'Board create success'
    state.all.push(board.data.data)
  },

  [BOARD_CREATING_FAIL] (state, error) {
    state.loading = false
    state.message = error.data.error
  },

  [SHOW_BOARD_CREATING] (state) {
    state.isShowCreating = !state.isShowCreating
  }
}

export default {
  state,
  mutations
}
