import { RECEIVED_YEARLY_DATA } from '../actions/actionTypes'
import { getYearData } from '../api/remote'
import { messageError, messageReset } from './authActions'

function fetYearDataSuccess(data) {
  return { type: RECEIVED_YEARLY_DATA, data }
}

export function fetchYearData(year) {
  return async (dispatch) => {
    try {
        const data = await getYearData(year);
        dispatch(fetYearDataSuccess(data));
    } catch (error) {
      dispatch(messageError(error))
      dispatch(messageReset())
    }
  }
}

