import { Reducer, Action } from 'redux'
import { ValueOf } from '../../TypeUtils'

export const AUTH_ACTIONS = {
  START: "START",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  LOGOUT: "LOGOUT"
}

export const ASYNC_STATUS = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
}

const initialState: AuthState = {
  status: ASYNC_STATUS.IDLE as AsyncStatus,
}

export type AsyncStatus = keyof typeof ASYNC_STATUS
export type ActionType = keyof typeof AUTH_ACTIONS

export type AuthState = {
  status: AsyncStatus
  token?: string
  email?: string
  password?: string
  error?: string
}
export interface AuthAction extends Action<ActionType> {
  token?: string
  email?: string
  password?: string
  error?: string
}

export const authReducer: Reducer<AuthState, AuthAction> = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.START:
      return {
        ...state,
        error: undefined,
        status: ASYNC_STATUS.PENDING as AsyncStatus
      };

    case AUTH_ACTIONS.SUCCESS:
      return {
        ...state,
        error: undefined,
        token: action.token,
        email: action.email,
        password: action.password,
        status: ASYNC_STATUS.SUCCESS as AsyncStatus
      };

    case AUTH_ACTIONS.FAIL:
      return {
        ...state,
        email: undefined,
        password: undefined,
        token: undefined,
        error: action.error,
        status: ASYNC_STATUS.FAIL as AsyncStatus
      }

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        email: undefined,
        password: undefined,
        token: undefined,
        error: undefined,
        status: ASYNC_STATUS.IDLE as AsyncStatus
      }

    default:
      return state;
  }
}