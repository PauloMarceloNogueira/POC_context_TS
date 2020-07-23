import React, { createContext, useReducer } from 'react';
import { AuthInitialStateType } from '../Schemas/AuthSchema';
import { authReducer } from '../Reducers';

export const AuthInitialState = {
  user: {
    name: 'Paulo Marcelo'
  }
}

export const AuthContext = createContext<{state: AuthInitialStateType; dispatch: React.Dispatch<any>}>({
  state: AuthInitialState,
  dispatch: () => null
})

export const AuthProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, AuthInitialState)
  return <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>; 
}