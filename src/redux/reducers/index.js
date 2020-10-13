import { combineReducers } from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers';
import outletReducers from './Login/OutletReducers';
import tableMapReducers from './Table/TableMapReducers'
const allReducers = combineReducers({
  allPropertyReducers,
  outletReducers,
  tableMapReducers
});

export default allReducers;
