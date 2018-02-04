import { AJAX_BEGIN, AJAX_ERROR, CLEAR_MESSAGE } from '../actions/actionTypes'

export default function messageReducer (state = { message: '', type: '' }, action) {
  switch (action.type) {
    case AJAX_ERROR:
      return Object.assign({}, {message: 'Error', type: 'error'})
    case AJAX_BEGIN:
      return Object.assign({}, {message: 'Loading..', type: 'info'})
    case CLEAR_MESSAGE:
    default:
      if (action.type.endsWith('_SUCCESS')) {
        return Object.assign({}, {message: 'Data loaded', type: 'success'})
      }
      return {}
  }
}
