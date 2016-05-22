import { BOARD_FAIL } from './mutation-types'

const state = {
  boards: []
}

const mutations = {
  [BOARD_FAIL] (state) {
    console.log('haha')
  }
}

export default {
  state,
  mutations
}
