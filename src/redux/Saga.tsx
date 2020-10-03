import {takeLatest} from 'redux-saga/effects'
import {loginFlow, registerFlow} from './auth/AuthSaga'
import {AUTH_LOGIN_STATES, AUTH_REGISTER_STATES} from '../Constants'

export function* saga() {
  yield takeLatest(AUTH_REGISTER_STATES.START, registerFlow)
  yield takeLatest(AUTH_LOGIN_STATES.START, loginFlow)
}
