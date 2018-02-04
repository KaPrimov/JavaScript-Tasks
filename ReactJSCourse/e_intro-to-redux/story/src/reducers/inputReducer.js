import * as types from '../actions/actionTypes'

export default function inputReducer(state = [], action) {
    switch (action.type) {
        case types.ADD_INPUT_SUCCESS:
            return [
                ...state, action.input
            ]
        case types.DELETE_INPUT_SUCCESS:
            return state.filter(input => input.id !== action.id)
        case types.EDIT_INPUT_SUCCESS:
            return Object.assign([], state.map(input => input.id === action.input.id ?
                { ...input, text: action.input.text } :
                input)) 
        case types.DELETE_LAST_INPUT_SUCCESS:
            return state.slice(0, -1)
        default:
            return state

    }
}
