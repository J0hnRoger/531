/**
 * User Sagas - Call User API for retrieve current user informations
 */
import {ActionTypes as appActionTypes } from "../Features/App/AppRedux";
import {ActionTypes as userActionsTypes, LoginAction } from "../Features/User/UserRedux";

import { put, call } from 'redux-saga/effects';
import WorkerApi from "../Api/WorkerApi";
import Worker from "../Entities/Worker";

export function* loginAsync(action: LoginAction) {
  try {
    const result = yield call(WorkerApi.GetCurrentWorker, action.login, action.password);
    if (result.data.lenght === 0)
      yield put({ type: appActionTypes.ERROR, error: "Login failed, a test User is : John - test ;) " })
    else {
      const worker = new Worker(result.data);
      yield put({ type: userActionsTypes.LOGIN_SUCESS, worker });
    }
  } catch (error) {
    yield put({type: appActionTypes.ERROR, error: error.message});
  } 
}  
