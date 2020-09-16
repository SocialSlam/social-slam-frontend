export type ValueOf<T> = T[keyof T]

export type UserResetPassword = {
  email: string
}

export type UserRegister = {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  passwordRepeat: string
  location: string
}

export type UserLogin = {
  email: string
  password: string
}

export type GraphQLValidAuthResponse = {
  success: true
  errors: null
  token: string
  refreshToken: string
}

export type GraphQLInvalidAuthResponse = {
  success: false
  errors: Record<string, any>
  token: null
  refreshToken: null
}

export type UserRegisterResponse = {
  register: GraphQLValidAuthResponse | GraphQLInvalidAuthResponse
}
export type UserLoginResponse = {
  tokenAuth: GraphQLValidAuthResponse | GraphQLInvalidAuthResponse
}

export type InputLabel = { title: string; state: string }

export type ActionProp = {
  type: string
  [props: string]: any
}
