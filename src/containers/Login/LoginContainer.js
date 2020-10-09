import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginComponent from '../../components/Login/LoginComponent';
import {getAllPropertyAction} from '../../redux/actions/Login/LoginAction';

export class LoginContainer extends Component {
  render() {
    return <LoginComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  // console.log(state.allPropertyReducers);
  return {
    allPropertyReducers: state.allPropertyReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetAllPropertyAction: () => {
      dispatch(getAllPropertyAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
