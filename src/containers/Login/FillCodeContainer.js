import React, { Component } from 'react'
import { connect } from 'react-redux'
import FillCodeComponent from '../../components/Login/FillCodeComponent'

export class FillCodeContainer extends Component {
    render() {
        return (
        <FillCodeComponent {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FillCodeContainer)
