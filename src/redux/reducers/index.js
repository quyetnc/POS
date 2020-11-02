import {combineReducers} from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
import registerDeviceReducers from './Login/RegisterDeviceReducers';
import getLocationTableReducers from './LocationTable/LocationTableReducers';
import getFindGuestReducers from './FindGuest/FindGuestReducers';
import checkDeviceReducers from './Login/CheckRegisterReducer';
import getFindTransactionReducers from './FindTransaction/FindTrasactionReducers';
import detailOrderReducers from './OrderItem/PostGetDetailOrderReducers';
import categoryMenuReducers from './OrderItem/PostGetCategoryMenuReducers';
import fullMenuReducers from './OrderItem/PostGetFullMenuReducers';
import postInsertOrderReducers from './OrderItem/PostInsertOrderReducers';
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
  registerDeviceReducers,
  getLocationTableReducers,
  checkDeviceReducers,
  getFindGuestReducers,
  getFindTransactionReducers,
  detailOrderReducers,
  fullMenuReducers,
  categoryMenuReducers,
  postInsertOrderReducers,
});

export default allReducers;
