import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function userReducer (state = initialState.followers, action) {
  switch (action.type) {
    case types.USER_COUNT_LOADED_SUCCESS:
      return {...state, [action.username]: action.count}
    default:
      return state
  }
}
