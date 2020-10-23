import React, { Component } from 'react';
import { connect } from 'react-redux';
import CaptainOrderComponent from '../../components/OrderItem/CaptainOrderComponent';
import { postGetCategoryMenuAction } from '../../redux/actions/OrderItem/PostGetCategoryMenuAction'
export class MenuOrderContainer extends Component {
  render() {
    return <CaptainOrderComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  // console.log(state.categoryMenuReducers)
  return {
    categoryMenuReducers: state.categoryMenuReducers
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCategoryMenuAction: () => {
      dispatch(postGetCategoryMenuAction());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOrderContainer);
