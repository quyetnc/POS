import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../../components/Login/LoginComponent';
import {getAllPropertyAction,getOutletAction} from '../../redux/actions/Login/LoginAction';

export class LoginContainer extends Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  // console.log(state.outletReducers);
  return {
    allPropertyReducers: state.allPropertyReducers,
    outletReducers: state.outletReducers,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
