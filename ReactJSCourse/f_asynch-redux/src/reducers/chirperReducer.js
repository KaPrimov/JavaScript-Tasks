import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function ajaxStatusReducer (state = initialState.chirpers, action) {
  switch (action.type) {
    case types.LOADED_HOME_PAGE_CHIRPS_SUCCESS:
      return [...state, action.chirps]
    default:
      return state
  }
}
