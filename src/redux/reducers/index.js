import { combineReducers } from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
import registerDeviceReducers from './Login/RegisterDeviceReducers';
import getLocationTableReducers from './LocationTable/LocationTableReducers';
import detailOrderReducers from './OrderItem/PostGetDetailOrderReducers'

import checkDeviceReducers from './Login/CheckRegisterReducer'
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
  registerDeviceReducers,
  getLocationTableReducers,
  checkDeviceReducers,
  detailOrderReducers
});

export default allReducers;
