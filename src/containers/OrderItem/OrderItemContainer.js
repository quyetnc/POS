import React, { Component } from 'react'
import { connect } from 'react-redux';
import OrderItemComponent from '../../components/OrderItem/OrderItemComponent';
class OrderItemContainer extends Component {
    render() {
        return (
            <OrderItemComponent {...this.props} />
        )
    }
}
const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderItemContainer);
