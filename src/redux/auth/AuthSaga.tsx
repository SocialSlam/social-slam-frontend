import axios from 'axios'
import {
  call,
  cancel,
  cancelled,
  fork,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects'
import {
  BASE_URL,
  URL_LOGIN,
  FLOW_LOGIN,
  FLOW_LOGOUT,
  AUTH_LOGIN_STATES,
  FLOW_REGISTER,
  AUTH_REGISTER_STATES,
} from '../../Constants'
import { UserRegister, UserRegisterResponse } from '../../TypeUtils'
import { mutation } from '../../services/GraphQL'

export type AuthRequestBody = {
  email: string
  password: string
}

export type AuthResponseBody = {
  token: string
  password: string
}

export function requestAuthorize(
  email: string,
  password: string
): Promise<AuthResponseBody> {
  const body: AuthRequestBody = {
    email,
    password,
  }

  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.get(URL_LOGIN, {
        data: body,
      })
      resolve(result.data)
    } catch (error) {
      reject(error)
    }
  })
}

export function* authorize(payload: any) {
  const { email, password } = payload
  yield put({ type: AUTH_LOGIN_STATES.START })
  try {
    const { token }: AuthResponseBody = yield call(
      requestAuthorize,
      email,
      password
    )
    yield put({ type: AUTH_LOGIN_STATES.SUCCESS, email, password, token })
  } catch (error) {
    yield put({ type: AUTH_LOGIN_STATES.FAIL, error })
  } finally {
    if (yield cancelled()) {
      yield put({ type: AUTH_LOGIN_STATES.LOGOUT })
    }
  }
}

export function* loginFlow(payload: any) {
  // const { email, password } = yield take(FLOW_LOGIN)
  const task = yield put(authorize, payload)
  const action = yield take([FLOW_LOGOUT, AUTH_LOGIN_STATES.FAIL])
  if (action.type === FLOW_LOGOUT) {
    yield cancel(task)
  }
}

async function apiRegister(payload: UserRegister) {
  const queryString = `mutation {
    register(
      email:"${payload.email}",
      username:"${payload.username}",
      password1: "${payload.password}",
      password2:"${payload.passwordRepeat}"
    ) {
      success,
      errors,
      token,
      refreshToken
    }
  }`

  const result = await mutation<UserRegisterResponse>(queryString)

  if (result.register.errors)
    throw new Error(Object.keys(result.register.errors).toString())

  return {
    token: result.register.token,
    refreshToken: result.register.refreshToken,
  }
}

export function* registerFlow(payload: UserRegister) {
  try {
    const response = yield call(apiRegister, payload)
    yield put({ type: AUTH_REGISTER_STATES.SUCCESS, ...response })
  } catch (error) {
    yield put({ type: AUTH_REGISTER_STATES.FAIL, error: error.message })
  }
}
