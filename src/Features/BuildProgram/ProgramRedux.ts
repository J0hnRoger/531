/**
 * Program Builder Reducers - Catch all events relatives to the program builder
 */

export enum ActionTypes {
    GETRM = "PROGRAM/GETRM",
  };

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
  };