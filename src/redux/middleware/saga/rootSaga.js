import { all } from 'redux-saga/effects';

import { watchAllProperty } from './Login/getAllPropertySaga';
import { watchGetOutlet } from './Login/getOutletSaga';
import { watchRegisterDevice } from './Login/postRegisterDeviceSaga';
import { watchGetLocation } from './Location/getLocationSaga';
export default function* rootSaga() {
  yield all([
    watchAllProperty(),
    watchGetOutlet(),
    watchRegisterDevice(),
    watchGetLocation(),
  ]);
}
