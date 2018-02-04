import * as requester from './requester'

// user/login
function login (username, password, callback) {
  let userData = {
    username,
    password
  }

  return requester.post('user', 'login', 'basic', userData)
}

// user/register
function register (username, password, repeatPassword, callback) {
  let userData = {
    username,
    password,
    subscriptions: []
  }

  const usernameRegex = /[A-Za-z]{5,}/
  const passwordRegex = /[\d\w]{6,}/

  if (!usernameRegex.test(username) || !passwordRegex.test(password) || password !== repeatPassword) {
    return callback(false)
  }

  return requester.post('user', '', 'basic', userData)
}

// user/logout
function logout () {
  return requester.post('user', '_logout', 'kinvey', null)
}

function countFollowers (username) {
  return requester.get('user', `?query={"subscriptions":"${username}"}`, 'kinvey')
}

function getAllUsers (callback) {
  return requester.get('user', '', 'kinvey')
}

function getSingleUser (id) {
  return requester.get('user', id, 'kinvey')
}

export { login, register, logout, getAllUsers, countFollowers, getSingleUser }
