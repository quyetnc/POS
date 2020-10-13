import {all} from 'redux-saga/effects';

import {watchAllProperty} from './Login/getAllPropertySaga';
import {watchGetOutlet} from './Login/getOutletSaga';
import {watchRegisterDevice} from './Login/postRegisterDeviceSaga';
import {watchGetTable} from './Table/getTableSaga';
import {watchCheckDevice} from './Login/postCheckDeviceSaga';
export default function* rootSaga() {
  yield all([
    watchAllProperty(),
    watchGetOutlet(),
    watchRegisterDevice(),
    watchCheckDevice(),
  ]);
}
