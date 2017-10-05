/**
 * App Reducers - Catch all system/ application events
 */
import { Reducer } from "redux";
import {UserState} from '../../Store';

export enum ActionTypes {
   LOGIN = "USER/LOGIN",
   LOGIN_SUCESS = "USER/LOGIN_SUCCESS",
   OTHER = "USER/OTHER",
};

export interface LoginAction {
    type: ActionTypes.LOGIN;
    login: string;
    pass: string;
}

export interface LoginSuccessAction {
    type: ActionTypes.LOGIN_SUCESS;
    worker: Worker;
}

export interface OtherAction {
    type: ActionTypes.OTHER;
}

export type UserActions = 
    | LoginAction
    | LoginSuccessAction
    | OtherAction;

const initialState = {

};
  
const userReducer: Reducer<UserState> = ( state: UserState = initialState, action: UserActions) => {
      switch (action.type) {
        case ActionTypes.LOGIN:
            return { ...state, login: action.login, pass: action.pass };
        case ActionTypes.LOGIN_SUCESS:
            return { ...state, currentWorker: action.worker };
        default:
            return state;
      }
  }
  
  export default userReducer;

  export const actionCreators = {
      login: (login: string, pass: string ) => ({ type : ActionTypes.LOGIN, login, pass }),
  };