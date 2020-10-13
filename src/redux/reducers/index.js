import { combineReducers } from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
import registerDeviceReducers from './Login/RegisterDeviceReducers';
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
  registerDeviceReducers,
});

export default allReducers;
