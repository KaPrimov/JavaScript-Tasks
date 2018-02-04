import * as types from './actionTypes'
import { register, login, logout, countFollowers, getAllUsers, getSingleUser } from '../api/auth'
import { loadAllChripsFromAuthor, loadAllChirpsFromSubscriptions } from '../api/chirpApi'
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions'

function registerSuccess (user) {
  return {type: types.REGISET_USER_SUCCESS, user}
}

function loginSuccess (user) {
  return {type: types.LOGIN_USER_SUCCESS, user}
}

function logoutUserSuccess () {
  return {type: types.LOGOUT_USER_SUCCESS}
}

function loadAllUsersSuccess (users) {
  return {type: types.LOAD_ALL_USERS_SUCCESS, users, message: 'All users loaded!'}
}

function usersCountLoadedSuccess (count, username) {
  return { type: types.USER_COUNT_LOADED_SUCCESS, count, username }
}

function userInfoLoadedSucces (user) {
  return { type: types.USER_INFO_LOADED_SUCCESS, user }
}

export function registerUser (username, password, repeatPassword, callback) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return register(username, password, repeatPassword, callback)
      .then(user => {
        dispatch(registerSuccess(user))
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

export function getUserData (id) {
  return function (dispatch) {
    return getSingleUser(id)
      .then(user => {
        loadAllChripsFromAuthor(user.username).then(chirps => {
          user.chirps = chirps
          countFollowers(user.username).then(followers => {
            user.followers = followers
            dispatch(userInfoLoadedSucces(user))
          })
        })
      })
  }
}

export function loginUser (username, password, callback) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return login(username, password, callback)
      .then(user => {
        saveSession(user)
        loadAllChripsFromAuthor(user.username).then(chirps => {
          user.chirps = chirps
          countFollowers(user.username).then(followers => {
            user.followers = followers
            loadAllChirpsFromSubscriptions(user.subscriptions).then(homePageChirs => {
              user.followingPosts = homePageChirs
              dispatch(loginSuccess(user))
            })
          })
        })
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

export function logoutUser () {
  return function (dispatch) {
    return logout()
      .then(() => {
        dispatch(logoutUserSuccess())
        sessionStorage.clear()
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

export function loadAllUsersAction () {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return getAllUsers()
      .then(users => {
        dispatch(loadAllUsersSuccess(users))
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

export function findAllFollowers(username) {
  return function(dispatch) {
    dispatch(beginAjaxCall())
    return countFollowers(username)
      .then(count => {
        dispatch(usersCountLoadedSuccess(count, username))
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

function saveSession (userInfo) {
  let userAuth = userInfo._kmd.authtoken
  sessionStorage.setItem('authToken', userAuth)
  let userId = userInfo._id
  sessionStorage.setItem('userId', userId)
  let username = userInfo.username
  sessionStorage.setItem('username', username)
  sessionStorage.setItem('name', userInfo.name)
}