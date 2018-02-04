import { registerReducer, loginReducer } from './authReducer'
import stats from './statsReducer'
import furniture from './furnitureReducer'
import message from './messageReducers'

export default {
  register: registerReducer,
  login: loginReducer,
  stats,
  furniture,
  message
}
