import { all } from 'redux-saga/effects';
 
import {watchAllProperty} from './Login/getAllPropertySaga'


export default function* rootSaga() {
    yield all([
        watchAllProperty(),
    ]);
}