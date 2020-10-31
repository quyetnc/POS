import {all} from 'redux-saga/effects';
import {watchAllProperty} from './Login/getAllPropertySaga';
import {watchGetOutlet} from './Login/getOutletSaga';
import {watchRegisterDevice} from './Login/postRegisterDeviceSaga';
import {watchGetLocationTable} from './LocationTable/getLocationTableSaga';
import {watchCheckDevice} from './Login/postCheckDeviceSaga';
import {watchGetFindGuest} from './FindGuest/FindGuestSaga';
import {watchGetFindTransaction} from './FindTransaction/FindTransactionSaga';
import {watchGetDetailOrder} from './OrderItem/postGetDetailOrderSaga';
import {watchGetCategoryMenu} from './OrderItem/PostGetCategoryMenuSaga';
import {watchGetFullMenu} from './OrderItem/PostGetFullMenuSaga';
import {watchPostInsertOrder} from './OrderItem/PostInsertOrderSaga'
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
    watchGetCategoryMenu(),
    watchGetFullMenu(),
    watchPostInsertOrder()
  ]);
}
