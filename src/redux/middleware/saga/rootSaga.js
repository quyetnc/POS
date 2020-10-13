import {all} from 'redux-saga/effects';

import {watchAllProperty} from './Login/getAllPropertySaga';
import {watchGetOutlet} from './Login/getOutletSaga';
import {watchRegisterDevice} from './Login/postRegisterDeviceSaga';

import { watchAllProperty } from './Login/getAllPropertySaga';
import { watchGetOutlet } from './Login/getOutletSaga';
import { watchGetTable } from './Table/getTableSaga';
export default function* rootSaga() {
  yield all([watchAllProperty(), watchGetOutlet(), watchRegisterDevice()]);
}
