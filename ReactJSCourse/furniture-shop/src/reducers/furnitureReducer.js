import { FETCH_PAGE_SUCCESS, CREATE_FURNITURE_SUCCESS, ADD_REVIEW_SUCCESS } from '../actions/actionTypes'

export default function furnitureReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PAGE_SUCCESS:
      return reconcile(state, action.data)
    case CREATE_FURNITURE_SUCCESS:
      return reconcile(state, [action.data.furniture])
    case ADD_REVIEW_SUCCESS:
      let furniture = state.filter(f => f.id === Number(action.furnitureId))[0]
      furniture.reviews.push(action.data)
      let newState = state.filter(f => f.id !== Number(action.furnitureId))
      return [...newState, furniture]
    default:
      return state
  }
}

function reconcile(oldData, newData) {
  const newDataById = {}

  for (let entry of newData) {
    newDataById[entry.id] = entry
  }

  const result = []

  for (let entry of oldData) {
    if (newDataById[entry.id]) {
      result.push(newDataById[entry.id])
      delete newDataById[entry.id]
    } else {
      result.push(entry)
    }
  }

  for (let id in newDataById) {
    result.push(newDataById[id])
  }

  result.sort((a, b) => a.id - b.id)

  return result
}