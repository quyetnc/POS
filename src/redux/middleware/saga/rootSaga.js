import {all} from 'redux-saga/effects';

import { watchAllProperty } from './Login/getAllPropertySaga';
import { watchGetOutlet } from './Login/getOutletSaga';
import { watchRegisterDevice } from './Login/postRegisterDeviceSaga';
import { watchGetLocationTable } from './LocationTable/getLocationTableSaga';
import { watchCheckDevice } from './Login/postCheckDeviceSaga';
import { watchGetFindGuest } from './FindGuest/FindGuestSaga';
import { watchGetFindTransaction } from './FindTransaction/FindTransactionSaga';
import {watchAllProperty} from './Login/getAllPropertySaga';
import {watchGetOutlet} from './Login/getOutletSaga';
import {watchRegisterDevice} from './Login/postRegisterDeviceSaga';
import {watchGetLocationTable} from './LocationTable/getLocationTableSaga';
import {watchCheckDevice} from './Login/postCheckDeviceSaga';
import {watchGetDetailOrder} from './OrderItem/postGetDetailOrderSaga';

export default function* rootSaga() {
  yield all([
    watchAllProperty(),
    watchGetOutlet(),
    watchRegisterDevice(),
    watchGetLocationTable(),
    watchCheckDevice(),
    watchGetFindGuest(),
    watchGetFindTransaction(),
    watchGetDetailOrder(),
  ]);
}
