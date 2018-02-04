import { registerReducer, loginReducer } from './authReducer'
import message from './messageReducer'
import yearly from './yearlyReducer'
import month from './monthReducer'

export default {
  register: registerReducer,
  login: loginReducer,
  message,
  yearly,
  month
}
