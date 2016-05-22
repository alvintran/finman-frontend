import * as api from '../utils/api'
import * as types from './mutation-types'

export const getAllBoards = ({dispatch}) => {
  dispatch(types.BOARD_REQUEST)
  api.getAllBoards().then(
    boards => dispatch(types.BOARD_SUCCESS, boards),
    res => dispatch(types.BOARD_FAIL, res)
  )
}

export const createBoard = ({dispatch}, board) => {
  dispatch(types.BOARD_CREATING_REQUEST)
  api.createBoard(board).then(
    board => dispatch(types.BOARD_CREATING_SUCCESS, board),
    error => dispatch(types.BOARD_CREATING_FAIL, error)
  )
}

export const showBoardForm = ({dispatch}) => {
  dispatch(types.SHOW_BOARD_CREATING)
}

export const login = ({dispatch}, creds) => {
  dispatch(types.LOGIN_REQUEST)
  api.doLogin(creds).then(
    token => dispatch(types.LOGIN_SUCCESS, token),
    error => dispatch(types.LOGIN_FAIL, error)
  )
}
