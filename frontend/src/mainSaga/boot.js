import { fork } from 'redux-saga/effects'
import initSaga from 'data/connection/sagas/mainSaga'
export default function* () {
  yield fork(initSaga)
}
