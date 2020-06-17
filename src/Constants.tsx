export const SOCKET_URL = 'ws://localhost:8080'

export const BASE_URL = 'http://localhost:3001'
export const URL_LOGIN = BASE_URL + '/login'

export const FLOW_LOGIN = 'FLOW_LOGIN'
export const FLOW_LOGOUT = 'FLOW_LOGOUT'

export const AUTH_ACTIONS = {
  START: 'START',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
  LOGOUT: 'LOGOUT',
}

export const ASYNC_STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
}
