import { combineReducers } from 'redux'
import { STORE_ROOT as STORE_ROOT_CONNECTION } from 'data/connection/constants'
import connectionReducer from 'data/connection/reducers'

export default combineReducers({
  [STORE_ROOT_CONNECTION]: connectionReducer,
})
