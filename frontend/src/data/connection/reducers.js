import createReducer from 'utils/createReducer'
import { RECEIVED_SOCKET } from './constants'
import initialState from './initialState'

function receivedSocket (state, payload) {
  return {
    ...state,
    socket: payload,
  }
}

export default createReducer(initialState, {
  [RECEIVED_SOCKET]: receivedSocket,
})
