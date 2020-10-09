import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Table from '../Table/TableComponent';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'KHACHLE', user: 'CUONGLT_POS', price: '1,507,275.00' },
        { id: 2, name: 'KHACHLE1', user: 'CUONGLT_POS1', price: '3,507,275.00' },
        { id: 3, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00' },
        { id: 4, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00' },
        { id: 5, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00' },
        { id: 6, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00' }
      ],
    };

  }

  render() {
    const { data } = this.state;
    const ItemTable = data.map((item, index) => {
      return (<Table
        key={index}
        name={item.name}
        user={item.user}
        price={item.price}
      />)

    })

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.titile}>Trang chủ</Text>
        </SafeAreaView>
        <ScrollView>
          <View style={styles.content}>
            {ItemTable}
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: Sizes.s50,
    backgroundColor: '#4dbd73',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titile: {
    color: '#fff',
    fontSize: Sizes.h18,
    fontWeight: 'bold',

  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    padding: 10,
    flexWrap: 'wrap'
  },

});