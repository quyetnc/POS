import {combineReducers} from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
});

export default allReducers;
