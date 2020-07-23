import React, { createContext, useReducer } from 'react';
import { ThemeType } from '../Schemas/ThemeSchema';
import { themeReducer } from '../Reducers/ThemeReducer';

export const ThemeInitialState:ThemeType = {
  isLight: true
}

export const ThemeContext = createContext<{state: ThemeType, dispatch:React.Dispatch<any>}>({
  state: ThemeInitialState,
  dispatch: () => null
})

export const ThemeProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, ThemeInitialState)
  return <ThemeContext.Provider value={{state, dispatch}}>
    {children}
  </ThemeContext.Provider>
}