/**
 * App Reducers - Catch all system/ application events
 */

export const actionTypes = {
  ERROR: "APP/ERROR",
  INIT: "APP/INIT",
  MESSAGE: "APP/MESSAGE",
};

// The application state object
export interface ApplicationState {
}

const initialState = {
};

export default function appReducer( state: ApplicationState = initialState, action: any) {
    switch (action.type) {
        case actionTypes.ERROR:
        case actionTypes.MESSAGE:
        case actionTypes.INIT:
            return { ...state };
        default:
            return state;
    }
}
