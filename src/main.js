import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Login from './components/Login'
import Board from './components/Board'

import { TOKEN_KEY } from './vuex/mutation-types'

Vue.use(VueResource)
Vue.use(VueRouter)

export const router = new VueRouter()

router.map({
  '/': {
    component: Board,
    auth: true
  },
  '/login': {
    component: Login,
    guest: true,
    auth: false
  }
})

router.redirect({
  '*': '/'
})

router.beforeEach(transition => {
  const token = window.localStorage.getItem(TOKEN_KEY)

  // Yêu cầu login với các routes yêu cầu authen
  if (transition.to.auth) {
    if (!token || token === null) {
      transition.redirect('/login')
    }
  }
  if (transition.to.guest) {
    if (token) {
      transition.redirect('/')
    }
  }
  transition.next()
})

Vue.http.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem(TOKEN_KEY)

router.start(App, '#app')
