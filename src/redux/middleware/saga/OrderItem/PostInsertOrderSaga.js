import * as Types from '../../../actions/OrderItem/PostInsertOrderAction';

import {call, takeEvery, put} from 'redux-saga/effects';
import {post_Insert_Order} from '../../api/OrderItem/PostInsertOrderApi';

function* postInsertOrder(action) {
 console.log("ok")
//     let response = yield post_Insert_Order();
  
//   if (response !== undefined) {
//       yield put({ type: Types.POST_INSERT_ORDER_SUCCESS, response: response });
//   } else {
//       yield put({ type: Types.POST_INSERT_ORDER_ERROR, error });
//   }
}

export function* watchPostInsertOrder() {
  yield takeEvery(Types.POST_INSERT_ORDER, postInsertOrder);
}
