import { Types, ActionMap } from '../Contexts'

const {Logout, Login, ChangeName} = Types

export type AuthType = {
  user: User
}

export  type User = {
  name?: string
}

export type AuthInitialStateType = {
  user: User
}

export  type AuthPayload = {
  [Login]: {
    name: string
  }
  [ChangeName]: {
    name: string
  }
  [Logout]: undefined
}

export type AuthAction = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>]
