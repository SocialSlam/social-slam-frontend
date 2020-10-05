export const SOCKET_URL = 'ws://localhost:8080'

export const BASE_URL = 'http://localhost:3001'
export const URL_LOGIN = BASE_URL + '/login'

export const ROUTE_HOME = '/'
export const ROUTE_REGISTER = '/register'
export const ROUTE_LOGIN = '/login'
export const ROUTE_RESET_PASSWORD = '/reset-password'


export const FLOW_LOGIN = 'FLOW_LOGIN'
export const FLOW_REGISTER = 'FLOW_REGISTER'
export const FLOW_LOGOUT = 'FLOW_LOGOUT'

export enum AUTH_LOGIN_STATES {
  START = 'AUTH_LOGIN_START',
  SUCCESS = 'AUTH_LOGIN_SUCCESS',
  FAIL = 'AUTH_LOGIN_FAIL',
  LOGOUT = 'AUTH_LOGIN_LOGOUT',
}

export enum AUTH_REGISTER_STATES {
  START = 'AUTH_REGISTER_START',
  SUCCESS = 'AUTH_REGISTER_SUCCESS',
  FAIL = 'AUTH_REGISTER_FAIL',
}

export enum ASYNC_STATUS {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export const REG_EXP_EMAIL = new RegExp(
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
)
export const REG_EXP_PASSWORD = new RegExp(
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/
) //minimum 8 chars, one number/char/symbol
