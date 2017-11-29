/**
 * App Reducers - Catch all system/ application events
 */
import { Reducer } from "redux";
import {UserState} from '../../Store';
import Worker from '../../Entities/Worker';

export enum ActionTypes {
   LOGIN = "USER/LOGIN",
   LOGIN_FAILED = "USER/LOGIN_FAILED",
   LOGIN_SUCESS = "USER/LOGIN_SUCCESS",
   OTHER = "USER/OTHER",
};

export interface LoginAction {
    type: ActionTypes.LOGIN;
    login: string;
    password: string;
}

export interface LoginFailedAction {
    type: ActionTypes.LOGIN_FAILED;
    error: string;
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
    | LoginFailedAction
    | LoginSuccessAction
    | OtherAction;

const initialState = {
    currentWorker: undefined,
};
  
const userReducer: Reducer<UserState> = ( state: UserState = initialState, action: UserActions) => {
      switch (action.type) {
            case ActionTypes.LOGIN_SUCESS:
            return { ...state, currentWorker: action.worker };
        default:
            return state;
      }
  }
  
  export default userReducer;

  export const actionCreators = {
      login: (login: string, password: string ) => ({ type : ActionTypes.LOGIN, login, password }),
  };