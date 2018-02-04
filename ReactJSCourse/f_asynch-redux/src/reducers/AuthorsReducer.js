import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function userReducer (state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_ALL_USERS_SUCCESS:
      return action.users
    default:
      return state
  }
}
