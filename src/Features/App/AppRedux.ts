import { ApplicationState } from "../../Store";

/**
 * App Reducers - Catch all system/ application events
 */

export enum ActionTypes {
  ERROR = "APP/ERROR",
  INIT = "APP/INIT",
  MESSAGE = "APP/MESSAGE",
};

const initialState = {
};

export default function appReducer( state: ApplicationState = initialState, action: any) {
    switch (action.type) {
        case ActionTypes.ERROR:
        return { ...state, error: action.error };
        case ActionTypes.MESSAGE:
        case ActionTypes.INIT:
            return { ...state };
        default:
            return state;
    }
}

export const actionCreators = {
};