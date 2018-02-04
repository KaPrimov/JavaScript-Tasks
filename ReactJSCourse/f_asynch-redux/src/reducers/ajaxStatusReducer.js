import * as types from '../actions/actionTypes'
import initialState from './initialState'

function actionTypeEndsInSuccess (type) {
  return type.substring(type.length - 8) === '_SUCCESS'
}

export default function ajaxStatusReducer (state = initialState.ajaxRequests, action) {
  switch (action.type) {
    case types.BEGIN_AJAX_CALL:
      return Object.assign({}, ...state, {ajaxCalls: state.ajaxCalls + 1}, {type: 'info'}, {message: 'Loading...'}, {visible: true})
    case types.AJAX_CALL_ERROR:
      return Object.assign({}, ...state, {ajaxCalls: state.ajaxCalls - 1}, {type: 'error'}, {message: action.message.responseText}, {visible: true})
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, ...state, {message: 'User has logged in'}, {type: 'success'}, {visible: true})
    case types.REGISET_USER_SUCCESS:
      return Object.assign({}, ...state, {message: 'User has registered'}, {type: 'success'}, {visible: true})
    case types.LOGOUT_USER_SUCCESS:
      return Object.assign({}, ...state, {message: 'User has logged out'}, {type: 'success'}, {visible: true})
    case types.CREATE_CHIRP_SUCCESS:
      return Object.assign({}, ...state, {message: 'Chirp is created'}, {type: 'success'}, {visible: true})
    case types.LOAD_ALL_USERS_SUCCESS:
      return Object.assign({}, ...state, {message: 'Users loaded'}, {type: 'success'}, {visible: true})
    case types.DELETE_CHIRP_SUCCESS:
      return Object.assign({}, ...state, {message: 'Chirp is deleted'}, {type: 'success'}, {visible: true})
    case types.HIDE_REQUEST_RESULT:
      return Object.assign({}, ...state, {visible: false})
    default:
      if (actionTypeEndsInSuccess(action.type)) {
        return Object.assign(...state, {ajaxCalls: state.ajaxCalls - 1}, {callResult: 'success'}, {message: action.message}, {visible: true})
      }
      return state
  }
}
