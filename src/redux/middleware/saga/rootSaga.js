import { all } from 'redux-saga/effects';

import { watchAllProperty } from './Login/getAllPropertySaga';
import { watchGetOutlet } from './Login/getOutletSaga';
import { watchRegisterDevice } from './Login/postRegisterDeviceSaga';
import { watchGetLocationTable } from './LocationTable/getLocationTableSaga';
import { watchCheckDevice } from './Login/postCheckDeviceSaga';

export default function* rootSaga() {
  yield all([
    watchAllProperty(),
    watchGetOutlet(),
    watchRegisterDevice(),
    watchGetLocationTable(),
    watchCheckDevice(),
  ]);
}
