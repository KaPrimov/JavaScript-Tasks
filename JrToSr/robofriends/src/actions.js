import * as ActionTypes from './constants.js';

export const setSearchField = (text) => ({
    type: ActionTypes.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: ActionTypes.REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch({ type: ActionTypes.REQUEST_ROBOTS_SUCCESS, payload: users }))
      .catch(error => dispatch({ type: ActionTypes.REQUEST_ROBOTS_FAILED, payload: error }));
}