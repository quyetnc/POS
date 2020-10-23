import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';

class CaptainOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOrder: [],
      menuItem: [],
      
    };
  }
  currencyFormat = (num) => {
    if (num == 0) {
      return '';
    } else {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
  };
  renderItem = ({ item, index }) => {
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
      <Text>Súp</Text>
      <Text style={[styles.itemCell, { textAlign: 'right' }]}>
        2
  </Text>
      <Text style={[styles.itemCell, { textAlign: 'right' }]}>
        {this.currencyFormat(10000000)}
      </Text>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{ flex: 1 }}
          data={this.state.dataOrder}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <TouchableOpacity style={styles.floatingBtn} onPress={() => this.props.navigation.navigate('AddItem')}>
          <Icon name='plus' size={20} color='white' />
        </TouchableOpacity>

        <View style={styles.totalBottom}>
          <Text style={styles.total}>Save</Text>
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
    padding: Sizes.s20,
    backgroundColor: '#2dadd2',
    alignItems: 'center'
  },
  total: {
    fontSize: Sizes.h28,
    color: '#fff',
  },
  floatingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2dadd2',
    position: 'absolute',
    bottom: Sizes.s140,
    right: Sizes.s25,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default CaptainOrderComponent