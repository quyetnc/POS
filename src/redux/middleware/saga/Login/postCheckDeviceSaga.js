import {
  POST_CHECK_DEVICE,
  POST_CHECK_DEVICE_SUCCESS,
  POST_CHECK_DEVICE_ERROR,
} from '../../../actions/Login/CheckDeviceAction';

import {call, takeEvery, put} from 'redux-saga/effects';
import {post_Check_Device} from '../../api/Login/postCheckDeviceApi';
import {post_Login_Passcode} from '../../api/Login/postLoginHavePasscodeApi';

function* checkRegisterDevice(action) {
  let response = yield post_Check_Device(action.data[0]);

  if (response == true) {
    let result = yield post_Login_Passcode(action.data[1]);
    console.log(result);
    if (result.TOKEN == null) {
      yield put({
        type: POST_CHECK_DEVICE_ERROR,
        response: {status : 0 ,mess: 'Passcode Sai'},
      });
    } else {
      yield put({type: POST_CHECK_DEVICE_SUCCESS, response: result});
    }
  } else {
    yield put({type: POST_CHECK_DEVICE_ERROR, response: {status : 0,mess: 'TB chua DK'}});
  }
  // if (response == true) {
  //   yield put({type: POST_CHECK_DEVICE_SUCCESS, response: response});
  // } else {
  //   yield put({type: POST_CHECK_DEVICE_ERROR, error});
  // }
}

export function* watchCheckDevice() {
  yield takeEvery(POST_CHECK_DEVICE, checkRegisterDevice);
}
