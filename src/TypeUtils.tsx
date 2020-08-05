export type ValueOf<T> = T[keyof T]

export type UserRegister = {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  passwordRepeat: string
  location: string
}

export type UserRegisterResponse =
  | {
      register: {
        success: true
        errors: null
        token: string
        refreshToken: string
      }
    }
  | {
      register: {
        success: false
        errors: Record<string, any>
        token: null
        refreshToken: null
      }
    }

export type ActionProp = {
  type: string
  [props: string]: any
}
