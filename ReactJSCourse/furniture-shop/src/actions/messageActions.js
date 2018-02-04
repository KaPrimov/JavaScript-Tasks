import { CLEAR_MESSAGE } from './actionTypes'

export function resetMessage() {
  return async (dispatch) => {
      dispatch({ type: CLEAR_MESSAGE });
  };
}