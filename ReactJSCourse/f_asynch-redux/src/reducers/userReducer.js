import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function userReducer (state = initialState.user, action) {
  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, action.user)
    case types.LOGOUT_USER_SUCCESS:
      return initialState.user
    case types.CREATE_CHIRP_SUCCESS:
      return {...state, chirps: [...state.chirps, action.chirp]}
    case types.DELETE_CHIRP_SUCCESS:
      return {...state, chirps: state.chirps.filter(c => c._id !== action.chirpId)}
    case types.USER_COUNT_LOADED_SUCCESS:
      return {...state, followers: action.count}
    default:
      return state
  }
}
