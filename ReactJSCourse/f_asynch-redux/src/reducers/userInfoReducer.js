import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function userReducer (state = initialState.userInfo, action) {
  switch (action.type) {
    case types.USER_INFO_LOADED_SUCCESS:
      return action.user
    default:
      return state
  }
}
