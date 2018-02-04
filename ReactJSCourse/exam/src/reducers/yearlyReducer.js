import { RECEIVED_YEARLY_DATA } from '../actions/actionTypes'

export default function yearlyReducer (state = { months: [] }, action) {
  switch (action.type) {
    case RECEIVED_YEARLY_DATA:
      return {months: action.data}
    default:
      return state
  }
}
