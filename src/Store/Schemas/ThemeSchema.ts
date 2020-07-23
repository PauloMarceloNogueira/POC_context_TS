import { Types, ActionMap } from '../Contexts'

const {Toggle} = Types

export type ThemeType = {
  isLight: boolean
}

export  type ThemePayload = {
  [Toggle]: {
    isLight: boolean
  }
}

export type ThemeAction = ActionMap<ThemePayload>[keyof ActionMap<ThemePayload>]
