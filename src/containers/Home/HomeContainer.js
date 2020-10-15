import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeComponent from '../../components/Home/HomeComponent'
// import { getAllTableMapAction } from '../../redux/actions/Table/TableAction'
import { getAllLocation } from '../../redux/actions/Location/LocationAction';
export class HomeContainer extends Component {
    render() {
        return (
            <HomeComponent {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        // onGetAllTableMapAction: () => {
        //     dispatch(getAllTableMapAction());
        // },
        onGetLocationAction: () => {
            dispatch(getAllLocation());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
