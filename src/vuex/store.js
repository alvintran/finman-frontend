import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import board from './modules/board'

// Logger middleware
import createLogger from '../middlewares/logger'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    board,
    login
  },
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})
