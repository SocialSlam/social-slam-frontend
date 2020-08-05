import { AUTH_REGISTER_STATES } from '../../Constants'
import { UserRegister } from '../../TypeUtils'
import { action } from '../Store'

export const authRegisterAction = (payload: UserRegister) => {
  action({
    type: AUTH_REGISTER_STATES.START,
    payload,
  })
}
