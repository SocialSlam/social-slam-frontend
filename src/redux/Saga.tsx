import { takeLatest } from 'redux-saga/effects'
import { registerFlow, loginFlow } from './auth/AuthSaga'
import { AUTH_REGISTER_STATES, AUTH_LOGIN_STATES } from '../Constants'

export function* saga() {
  yield takeLatest(AUTH_REGISTER_STATES.START, registerFlow)
  yield takeLatest(AUTH_LOGIN_STATES.START, loginFlow)
}
