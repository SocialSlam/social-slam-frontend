import { takeLatest } from 'redux-saga/effects'
import { registerFlow } from './auth/AuthSaga'
import { AUTH_REGISTER_STATES } from '../Constants'

export function* saga() {
  yield takeLatest(AUTH_REGISTER_STATES.START, registerFlow)
}
