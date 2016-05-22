import {
  TOKEN_KEY,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
  // SIGNUP_REQUEST,
  // SIGNUP_SUCCESS,
  // SIGNUP_FAIL
} from '../mutation-types'
import { router } from '../../main'

const state = {
  credentials: {
    email: '',
    password: ''
  },
  loading: false,
  message: ''
}

export const mutations = {
  [LOGIN_REQUEST] (state) {
    state.loading = true
    state.message = ''
  },

  [LOGIN_SUCCESS] (state, token) {
    state.loading = false
    window.localStorage.setItem(TOKEN_KEY, token.data.token)
    router.go('/boards')
  },

  [LOGIN_FAIL] (state) {
    state.loading = false
    state.message = 'Login fail. Please try again!'
  }
}

export default {
  state,
  mutations
}
