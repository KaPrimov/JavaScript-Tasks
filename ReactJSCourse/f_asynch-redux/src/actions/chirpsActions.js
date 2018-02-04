import * as types from './actionTypes'
import { createChirp, loadAllChirpsFromSubscriptions, deleteChirp } from '../api/chirpApi'
import { ajaxCallError, beginAjaxCall } from './ajaxStatusActions'

function createChirpSuccess (chirp) {
  return { type: types.CREATE_CHIRP_SUCCESS, chirp }
}

function deleteChirpSuccess (chirpId) {
  return { type: types.DELETE_CHIRP_SUCCESS, chirpId }
}

export function createChirpFunc (text, author) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return createChirp(text, author)
      .then(chirp => {
        dispatch(createChirpSuccess(chirp))
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

export function loadAllChirpsFromSubscriptionsFunc (users) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return loadAllChirpsFromSubscriptions(users)
      .then(chirp => {
        dispatch(createChirpSuccess(chirp))
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}

export function deleteChirpActionCreator (chirpId) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return deleteChirp(chirpId)
      .then(chirp => {
        dispatch(deleteChirpSuccess(chirpId))
      }).catch(err => {
        dispatch(ajaxCallError(err))
      })
  }
}
