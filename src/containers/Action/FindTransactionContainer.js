import React, { Component } from 'react'
import FindTransaction from '../../components/Action/FindTransaction';
import { connect } from 'react-redux';

class FindTransactionContainer extends Component {
    render() {
        return (
            <FindTransaction {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(FindTransactionContainer);