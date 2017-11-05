import { ApplicationState } from "../../Store";

/**
 * Program Builder Reducers - Catch all events relatives to the program builder
 */

export enum ActionTypes {
    GETRM = "PROGRAM/GETRM",
    GETRM_SUCCESS = "PROGRAM/GETRM_SUCCESS",
  };

  const initialState = {
  };
  
  export default function appReducer( state: ApplicationState = initialState, action: any) {
      switch (action.type) {
          case ActionTypes.GETRM_SUCCESS:
            return {...state, }
          default:
              return state;
      }
  }
  
  export const actionCreators = {
    calculateRM: (weight: number, nbReps: number) => ({ type: ActionTypes.GETRM, weight, nbReps }),
  };