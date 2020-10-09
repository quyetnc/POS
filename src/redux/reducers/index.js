import { combineReducers } from 'redux';
import allPropertyReducers from './Login/AllPropertyReducers'
const allReducers = combineReducers({
    allPropertyReducers,
});

export default allReducers;