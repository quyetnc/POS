import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeComponent from '../../components/Home/HomeComponent'
// import { getAllTableMapAction } from '../../redux/actions/Table/TableAction'
import { getLocationTableAction } from '../../redux/actions/Location_Table/LocationTableAction';
export class HomeContainer extends Component {
    render() {
        return (
            <HomeComponent {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        getLocationTableReducers: state.getLocationTableReducers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        onGetLocationTableAction: () => {
            dispatch(getLocationTableAction());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
