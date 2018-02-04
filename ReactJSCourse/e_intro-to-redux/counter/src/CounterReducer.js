export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [...state.map(n => Number(n)), Number(0)]
    case 'REMOVE_COUNTER':
      return state.slice(0, -1)
    case 'INCREMENT':
      return [...state.slice(0, action.index), Number(state[action.index]) + 1, ...state.slice(action.index + 1)]
    case 'DECREMENT':
      return [...state.slice(0, action.index), Number(state[action.index]) - 1, ...state.slice(action.index + 1)]
    case 'CLEAR':
      return [...state.slice(0, action.index), Number(0), ...state.slice(action.index + 1)]
    default:
      return state
  }
}
