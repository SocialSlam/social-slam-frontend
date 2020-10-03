import axios from 'axios'
import {call, put} from 'redux-saga/effects'
import {AUTH_LOGIN_STATES, AUTH_REGISTER_STATES, URL_LOGIN,} from '../../Constants'
import {mutation} from '../../services/GraphQL'
import {UserLogin, UserLoginResponse, UserRegister, UserRegisterResponse,} from '../../TypeUtils'

export function requestAuthorize(
    email: string,
    password: string
): Promise<UserLogin> {
    const body: UserLogin = {
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

async function apiLogin(payload: any) {
    const queryString = `mutation {
    tokenAuth(
      email:"${payload.email}",
      password: "${payload.password}",
    ) {
      success,
      errors,
      token,
      refreshToken
    }
  }`

    const result = await mutation<UserLoginResponse>(queryString)

    if (result.tokenAuth.errors)
        throw new Error(Object.keys(result.tokenAuth.errors).toString())

    return {
        token: result.tokenAuth.token,
        refreshToken: result.tokenAuth.refreshToken,
    }
}

export function* loginFlow(payload: UserLogin) {
    try {
        const response = yield call(apiLogin, payload)
        yield put({type: AUTH_LOGIN_STATES.SUCCESS, email: payload.email, ...response})
    } catch (error) {
        yield put({type: AUTH_LOGIN_STATES.FAIL, error: error.message})
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
        yield put({type: AUTH_REGISTER_STATES.SUCCESS, ...response})
    } catch (error) {
        yield put({type: AUTH_REGISTER_STATES.FAIL, error: error.message})
    }
}
