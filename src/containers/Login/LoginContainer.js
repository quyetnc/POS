import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../../components/Login/LoginComponent';
import {
  getAllPropertyAction,
  getOutletAction,
} from '../../redux/actions/Login/LoginAction';
import {postRegisterDeviceAction} from '../../redux/actions/Login/RegisterDeviceAction';

export class LoginContainer extends Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    allPropertyReducers: state.allPropertyReducers,
    outletReducers: state.outletReducers,
    statusRegisterDevice: state.registerDeviceReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPropertyAction: () => {
      dispatch(getAllPropertyAction());
    },
    onGetOutletAction: (code) => {
      dispatch(getOutletAction(code));
    },
    onPostRegisterDeviceAction: (info) => {
      dispatch(postRegisterDeviceAction(info));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
