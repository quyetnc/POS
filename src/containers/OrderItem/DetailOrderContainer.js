import React, {Component} from 'react';
import {connect} from 'react-redux';
import DetailOrderComponent from '../../components/OrderItem/DetailOrderComponent';

export class DetailOrderContainer extends Component {
    
  render() {
    return <DetailOrderComponent {...this.props} />;
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailOrderContainer);
