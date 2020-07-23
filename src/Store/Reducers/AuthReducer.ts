import {AuthAction, AuthType} from '../Schemas/AuthSchema'
import { Types } from '../Contexts'

export const authReducer = (state: AuthType, action: AuthAction) => {
  switch(action.type) {
    case Types.ChangeName: 
      return {
        ...state,
        user: {
          name: action.payload.name
        }
      }
    case Types.Login: 
      return {
        ...state,
        user: {
          name: action.payload.name
        }
      }
    case Types.Logout: 
      return {
        user: {}
      }
    default: 
      return state
  }
}