import { get, post, deleteItem } from './requester'

function loadAllChripsFromAuthor(author) {
  let endpoint = `chirps?query={"author":"${author}"}`

  return get('appdata', endpoint, 'kinvey')
}

function loadAllChirpsFromSubscriptions (users) {
  let endpoint = `chirps?query={"author":{"$in":[${users.map(u => `"${u}"`).join(',')}]}}&sort={"_kmd.ect": 1}"}`
  return get('appdata', endpoint, 'kinvey')
}

function createChirp (author, text) {
  let chirpData = {
    author,
    text
  }

  return post('appdata', 'chirps', 'kinvey', chirpData)
}

function deleteChirp (commentId) {
  return deleteItem('appdata', 'chirps', commentId, 'kinvey')
}

export { loadAllChripsFromAuthor, createChirp, deleteChirp, loadAllChirpsFromSubscriptions }
