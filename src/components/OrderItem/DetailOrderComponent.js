import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class DetailOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }
  componentDidMount() {
    this.handleData();
  }
  currencyFormat = (num) => {
    if (num == 0) {
      return '';
    } else {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
  };

  handleData = () => {
    let data = this.props.route.params.detailsItem.map((item) => item.PRICE);
    let total = data.reduce((acc, val) => acc + val, 0);
    this.setState({
      total,
    });
  };

  renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
          borderBottomWidth: 0.5,
          borderBottomColor: 'gray',
        }}>
        <Text
          style={[
            styles.itemCell,
            { color: `${item.DETAIL_TYPE === 'CONDIMENT' ? 'red' : '#000'}` },
          ]}>
          {item.NAME}
        </Text>
        <Text style={[styles.itemCell, { textAlign: 'right' }]}>
          {item.QUANTITY}
        </Text>
        <Text style={[styles.itemCell, { textAlign: 'right' }]}>
          {this.currencyFormat(item.PRICE)}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.route.params.detailsItem}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.totalBottom}>
          <Text style={styles.total}>{this.currencyFormat(this.state.total)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  itemCell: {
    width: '33%',
  },
  totalBottom: {
    padding: 15,
    backgroundColor: '#4dbd74',
  },
  total: {
    textAlign: 'right',
    fontSize: 16,
    color: '#fff',
  },
});
