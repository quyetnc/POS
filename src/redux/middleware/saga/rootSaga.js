import {all} from 'redux-saga/effects';

import {watchAllProperty} from './Login/getAllPropertySaga';
import {watchGetOutlet} from './Login/getOutletSaga';

export default function* rootSaga() {
  yield all([watchAllProperty(), watchGetOutlet()]);
}
