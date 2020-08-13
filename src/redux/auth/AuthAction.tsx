import { AUTH_REGISTER_STATES, AUTH_LOGIN_STATES } from '../../Constants'
import { UserRegister, UserLogin } from '../../TypeUtils'
import { action } from '../Store'

export const authRegisterAction = (payload: UserRegister) => {
  action({
    type: AUTH_REGISTER_STATES.START,
    payload,
  })
}

export const authLoginAction = (payload: UserLogin) => {
  action({
    type: AUTH_LOGIN_STATES.START,
    payload,
  })
}
