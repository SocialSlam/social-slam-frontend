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

export type EventInfo = {}

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

export type GQLUser = {
  id: number
  lastLogin?: string
  username: string
  firstName: string
  lastName: string
  email: string
  isStaff: boolean
  isActive: boolean
  dateJoined: string
  skills: GQLSkill[]
  userSkillLevels: GQLSkillLevel[]
  slams: Event[]
  performances: Event[]
  pk?: number
  archived?: boolean
  verified?: boolean
  secondaryEmail?: string
}

export type GQLSkill = {
  id: number
  skillCategory: GQLSkillCategory
  userSkillLevels: GQLSkillLevel[]
}
export type GQLSkillLevel = {
  id: number
  skillLevel: GQLSkillLevelE
  skill: GQLSkill
}
export type GQLEvent = {
  id: number
  datetime: string
  title: string
  description: string
}

export enum GQLSkillCategory {
  A_0 = 'Music',
  A_1 = 'Dance',
  A_2 = 'Poetry',
  A_3 = 'Art',
  A_4 = 'Fitness',
  A_5 = 'Pitch',
}

export enum GQLSkillLevelE {
  A_0 = 'Beginner',
  A_1 = 'Novice',
  A_2 = 'Intermediate',
  A_3 = 'Expert',
  A_4 = 'Professional',
}
