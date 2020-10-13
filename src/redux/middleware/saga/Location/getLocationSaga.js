import *as Types from '../../../actions/Location/LocationAction';

import { takeEvery, put } from 'redux-saga/effects';

import { getLocation } from '../../api/Location/getLocationApi';

function* get_Location() {
    let response = yield getLocation();

    console.log('saga:', response);
    // console.log('Location Saga');
}


export function* watchGetLocation() {
    yield takeEvery(Types.GET_LOCATION, get_Location);
}