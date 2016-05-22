import { router } from '../index'
import { ENDPOINT } from './api'
import { TOKEN_KEY } from '../mutation-types'

// const LOGIN_URL = ENDPOINT + '/login'
// const SIGNUP_URL = ENDPOINT + '/signup'

export const checkAuth = () {
  const jwt = window.localStorage.getItem(TOKEN_KEY)
  if (jwt) {

  }
}
