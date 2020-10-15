import { combineReducers } from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
import registerDeviceReducers from './Login/RegisterDeviceReducers';
import locationReducers from './Location/LocationReducers';

import checkDeviceReducers from './Login/CheckRegisterReducer'
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
  registerDeviceReducers,
  locationReducers,
  checkDeviceReducers
});

export default allReducers;
