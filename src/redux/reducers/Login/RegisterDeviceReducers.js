import {
    POST_REGISTER_DEVICE_SUCCESS,
    POST_REGISTER_DEVICE_ERROR,
  } from '../../actions/Login/RegisterDeviceAction';
  var initialState = false;
  const registerDeviceReducers = (state = initialState, action) => {
    try {
      switch (action.type) {
        case POST_REGISTER_DEVICE_SUCCESS:
          // console.log(action.response);
          return action.response ;
   
        case POST_REGISTER_DEVICE_ERROR:
          return action.response ? action.response.isSuccess : -1;
        default:
          return state;
      }
    } catch (error) {
      return state;
    }
  };
  
  export default registerDeviceReducers;
  