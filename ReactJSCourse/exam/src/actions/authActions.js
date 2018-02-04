import { REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED, MESSAGE_ERROR, MESSAGE_SUCCESS, MESSAGE_RESET } from '../actions/actionTypes'
import { login, register } from '../api/remote'

function registerSuccess () {
  return {
    type: REGISTER_SUCCESS
  }
}

function loginSuccess () {
  return {
    type: LOGIN_SUCCESS
  }
}

export function messageSuccess (message) {
  return { type: MESSAGE_SUCCESS, message }
}

export function messageError (message) {
  return { type: MESSAGE_ERROR, message }
}

export function messageReset () {
  return {type: MESSAGE_RESET}
}

export function redirect () {
  return {
    type: REDIRECTED
  }
}

function registerAction(name, email, password) {
  return (dispatch) => {
    return register(name, email, password)
      .then(json => {
        if (json.success) {
          dispatch(registerSuccess())
          dispatch(messageSuccess(json.message))
          dispatch(messageReset())
        } else {
          dispatch(messageError(json.message))
          dispatch(messageReset())
        }
      })
  }
}

function loginAction(email, password) {
  return (dispatch) => {
    return login(email, password)
      .then(json => {
        if (json.success) {
          localStorage.setItem('authToken', json.token)
          localStorage.setItem('user', json.user.name)
          dispatch(loginSuccess())
          dispatch(messageSuccess(json.message))
          dispatch(messageReset())
        } else {
          console.log(json.message)
          dispatch(messageError(json.message))
          dispatch(messageReset())
        }
      })
  }
}

function logoutAction() {
  return (dispatch) => {
    dispatch(messageSuccess('Logout successfull'))
    dispatch(messageReset())
    localStorage.clear()
  }
}

export { registerAction, loginAction, logoutAction }
