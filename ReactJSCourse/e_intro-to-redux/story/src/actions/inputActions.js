import * as types from './actionTypes'


export function addInputSuccess(input) {
    return { type: types.ADD_INPUT_SUCCESS, input }
}

export function deleteInput(id) {
    return { type: types.DELETE_INPUT_SUCCESS, id }
}

export function editInput(input) {
    return { type: types.EDIT_INPUT_SUCCESS, input }
}

export function getAllInputs() {
    return {type: types.GET_INPUTS_SUCCESS }
}

export function deleteLastInput() {
    return { type: types.DELETE_LAST_INPUT_SUCCESS }
}