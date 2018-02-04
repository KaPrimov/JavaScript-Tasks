import { combineReducers } from 'redux'
import chirper from './chirperReducer'
import user from './userReducer'
import ajaxRequests from './ajaxStatusReducer'
import author from './AuthorsReducer'
import followers from './followersReducer'
import userInfo from './userInfoReducer'

const rootReducer = combineReducers({
  chirper,
  user,
  ajaxRequests,
  author,
  followers,
  userInfo
})

export default rootReducer
