import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeComponent from '../../components/Home/HomeComponent';
import {getAllTableMapAction} from '../../redux/actions/Table/TableAction';
import {getAllLocation} from '../../redux/actions/Location/LocationAction';

export class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}
const mapStateToProps = (state) => {
 
  return {
    getLocationReducers: state.getLocationReducers,
    tableMapReducers: state.tableMapReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetLocationAction: () => {
      dispatch(getAllLocation());
    },
    onGetAllTableMapAction: () => {
      dispatch(getAllTableMapAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
