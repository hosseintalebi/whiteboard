import io from 'socket.io-client'
import { call, put } from 'redux-saga/effects'

import { receivedSocket } from '../actions'
function initConnection () {
  const socket = io()
  return new Promise((resolve, reject) => {
    socket.on('connect', () => resolve(socket))
  })
}

function* mainSaga () {
  const socket = yield call(initConnection)
  yield put(receivedSocket(socket))
}

export default mainSaga
