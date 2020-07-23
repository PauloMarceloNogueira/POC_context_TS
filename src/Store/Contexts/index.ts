  
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Login = 'LOGIN',
  ChangeName = 'CHANGE_NAME',
  Logout = 'LOGOUT',
  Toggle = 'TOGGLE'
}