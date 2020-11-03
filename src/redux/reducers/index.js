import {combineReducers} from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
import registerDeviceReducers from './Login/RegisterDeviceReducers';
import getLocationReducers from './Location/LocationReducers';
import getFindGuestReducers from './FindGuest/FindGuestReducers';
import checkDeviceReducers from './Login/CheckRegisterReducer';
import getFindTransactionReducers from './FindTransaction/FindTrasactionReducers';
import detailOrderReducers from './OrderItem/PostGetDetailOrderReducers';
import categoryMenuReducers from './OrderItem/PostGetCategoryMenuReducers';
import fullMenuReducers from './OrderItem/PostGetFullMenuReducers';
import postInsertOrderReducers from './OrderItem/PostInsertOrderReducers';
import tableMapReducers from './Table/TableMapReducers';
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
  registerDeviceReducers,
  getLocationReducers,
  checkDeviceReducers,
  getFindGuestReducers,
  getFindTransactionReducers,
  detailOrderReducers,
  fullMenuReducers,
  categoryMenuReducers,
  postInsertOrderReducers,
  tableMapReducers,
});

export default allReducers;
