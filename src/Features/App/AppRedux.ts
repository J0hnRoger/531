/**
 * App Reducers - Catch all system/ application events
 */

export enum ActionTypes {
  ERROR = "APP/ERROR",
  INIT = "APP/INIT",
  MESSAGE = "APP/MESSAGE",
};

// The application state object
export interface ApplicationState {
}

const initialState = {
};

export default function appReducer( state: ApplicationState = initialState, action: any) {
    switch (action.type) {
        case ActionTypes.ERROR:
        case ActionTypes.MESSAGE:
        case ActionTypes.INIT:
            return { ...state };
        default:
            return state;
    }
}

export const actionCreators = {
    login: () => ({ type: ActionTypes.INIT }),
    createBanner: (newBanner : Banner) => ({ type : actionTypes.CREATE_BANNER, newBanner }),
};