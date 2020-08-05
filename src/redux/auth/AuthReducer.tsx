import { Reducer, Action } from 'redux'
import {
  AUTH_LOGIN_STATES,
  ASYNC_STATUS,
  AUTH_REGISTER_STATES,
} from '../../Constants'

export type AuthState = {
  status: ASYNC_STATUS
  token?: string
  refreshToken?: string
  error?: string
}
export interface AuthAction
  extends Action<AUTH_LOGIN_STATES | AUTH_REGISTER_STATES> {
  token?: string
  refreshToken?: string
  email?: string
  password?: string
  error?: string
}

const initialState: AuthState = {
  status: ASYNC_STATUS.IDLE,
  token: undefined,
  refreshToken: undefined,
  error: undefined,
}

export const authReducer: Reducer<AuthState, AuthAction> = (
  state = { ...initialState },
  action
) => {
  switch (action.type) {
    case AUTH_REGISTER_STATES.START:
      return {
        ...state,
        error: undefined,
        status: ASYNC_STATUS.PENDING,
      }
    case AUTH_REGISTER_STATES.SUCCESS:
      return {
        ...state,
        error: undefined,
        status: ASYNC_STATUS.SUCCESS,
        token: action.token,
        refreshToken: action.refreshToken,
      }
    case AUTH_REGISTER_STATES.FAIL:
      return {
        ...state,
        error: action.error,
        status: ASYNC_STATUS.FAIL,
      }

    case AUTH_LOGIN_STATES.LOGOUT:
      return { ...initialState }

    default:
      return state
  }
}
