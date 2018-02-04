import * as types from './actionTypes'

export function beginAjaxCall () {
  return {type: types.BEGIN_AJAX_CALL}
}

export function ajaxCallError (err) {
  return {type: types.AJAX_CALL_ERROR, message: err}
}

export function hideRequestResult () {
  return {type: types.HIDE_REQUEST_RESULT}
}
