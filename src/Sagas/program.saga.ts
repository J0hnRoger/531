/**
 * Program Sagas - Call Program API for build the program for the user
 */
import {ActionTypes as appActionTypes } from "../Features/App/AppRedux";
import {ActionTypes as programActionsTypes } from "../Features/BuildProgram/ProgramRedux";

import { put, call } from 'redux-saga/effects';
import WorkerApi from "../Api/WorkerApi";

export function* loginAsync() {
  try {
    const result = yield call(WorkerApi.GetCurrentWorker, "", "");
    yield put({ type: programActionsTypes.GETRM, worker: result });
  } catch (error) {
    yield put({type: appActionTypes.ERROR, error: error.message});
  } 
}  
