import { ThemeType, ThemeAction } from '../Schemas/ThemeSchema'
import { Types } from '../Contexts'

export const themeReducer = (state: ThemeType, action: ThemeAction) => {
  switch(action.type) {
    case Types.Toggle: 
      return {
        ...state,
        isLight: !state.isLight
      }
    default:
      return state
  }
}
