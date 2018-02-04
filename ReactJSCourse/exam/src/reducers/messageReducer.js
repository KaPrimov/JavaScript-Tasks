import { MESSAGE_ERROR, MESSAGE_SUCCESS, MESSAGE_RESET } from '../actions/actionTypes'

export default function messageReducer(state = { message: '', type: '' }, action) {
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return Object.assign({}, state, { message: action.message, type: 'success' })
    case MESSAGE_ERROR:
      return Object.assign({}, state, { message: action.message, type: 'error' })
    case MESSAGE_RESET:
      return {}
    default:
      return state
  }
}
