import React, {Component} from 'react';
import {connect} from 'react-redux';
import CaptainOrderComponent from '../../components/OrderItem/CaptainOrderComponent';
import {postGetCategoryMenuAction} from '../../redux/actions/OrderItem/PostGetCategoryMenuAction';
import {postGetFullMenuAction} from '../../redux/actions/OrderItem/PostGetFullMenuAction';
import {postInsertOrderAction} from '../../redux/actions/OrderItem/PostInsertOrderAction';

export class MenuOrderContainer extends Component {
  render() {
    return <CaptainOrderComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    categoryMenuReducers: state.categoryMenuReducers,
    fullMenuReducers: state.fullMenuReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCategoryMenuAction: () => {
      dispatch(postGetCategoryMenuAction());
    },
    onPostGetFullMenuAction: () => {
      dispatch(postGetFullMenuAction());
    },
    onPostInsertOrderAction: () => {
      dispatch(postInsertOrderAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOrderContainer);
