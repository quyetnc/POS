import React, {Component} from 'react';
import {connect} from 'react-redux';
import MenuOrderComponent from '../../components/OrderItem/MenuOrderComponent';

export class MenuOrderContainer extends Component {
  render() {
    return <MenuOrderComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MenuOrderContainer);
