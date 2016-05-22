import Vue from 'vue'

export const ENDPOINT = 'http://api.finman.lc'

export const getAllBoards = () => {
  return Vue.http.get(ENDPOINT + '/boards')
}

export const createBoard = (board) => {
  return Vue.http.post(ENDPOINT + '/boards', board)
}

export const doLogin = (credentials) => {
  return Vue.http.post(ENDPOINT + '/login', credentials)
}
