/**
 * User Sagas - Call User API for retrieve current user informations
 */
import {ActionTypes as appActionTypes } from "../Features/App/AppRedux";
import {ActionTypes as userActionsTypes } from "../Features/User/UserRedux";

import { put, call } from 'redux-saga/effects';
import WorkerApi from "../Api/WorkerApi";

export function* loginAsync() {
  try {
    const result = yield call(WorkerApi.GetCurrentWorker, "", "");
    yield put({ type: userActionsTypes.LOGIN_SUCESS, worker: result });
  } catch (error) {
    yield put({type: appActionTypes.ERROR, error: error.message});
  } 
}  
