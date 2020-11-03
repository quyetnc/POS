import { all } from 'redux-saga/effects';
import { watchAllProperty } from './Login/getAllPropertySaga';
import { watchGetOutlet } from './Login/getOutletSaga';
import { watchRegisterDevice } from './Login/postRegisterDeviceSaga';
import { watchGetDataLocation } from './Location/LocationSaga';
import { watchCheckDevice } from './Login/postCheckDeviceSaga';
import { watchGetFindGuest } from './FindGuest/FindGuestSaga';
import { watchGetFindTransaction } from './FindTransaction/FindTransactionSaga';
import { watchGetDetailOrder } from './OrderItem/postGetDetailOrderSaga';
import { watchGetCategoryMenu } from './OrderItem/PostGetCategoryMenuSaga';
import { watchGetFullMenu } from './OrderItem/PostGetFullMenuSaga';
import { watchPostInsertOrder } from './OrderItem/PostInsertOrderSaga'
import {watchGetTable} from './Table/getTableSaga';
export default function* rootSaga() {
  yield all([
    watchAllProperty(),
    watchGetOutlet(),
    watchRegisterDevice(),
    watchGetDataLocation(),
    watchCheckDevice(),
    watchGetFindGuest(),
    watchGetFindTransaction(),
    watchGetDetailOrder(),
    watchGetCategoryMenu(),
    watchGetFullMenu(),
    watchPostInsertOrder(),
    watchGetTable()
  ]);
}
