import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';
import Table from './TableComponent';
import TabLocation from './TabLocation';
import {storeIsLogin, removeIsLogin, getIsLogin} from '../../config/settings';
import AsyncStorage from '@react-native-community/async-storage';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'KHACHLE', user: 'CUONGLT_POS', price: '1,507,275.00'},
        {id: 2, name: 'KHACHLE1', user: 'CUONGLT_POS1', price: '3,507,275.00'},
        {id: 3, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00'},
        {id: 4, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00'},
        {id: 5, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00'},
        {id: 6, name: 'KHACHLE2', user: 'CUONGLT_POS2', price: '2,507,275.00'},
        {id: 7, name: '', user: '', price: ''},
        {id: 7, name: '', user: '', price: ''},
      ],

      opacityView: false,
      visibleInfoGuest: false,
    };
  }

  componentDidMount() {
    this.getDataFloor();
    this.getIsLoginnnn();
  }

  getDataFloor = () => {
    this.props.onGetLocationAction({
      PROPERTY_CODE: 'LAR',
      OUTLET_ID: 1124,
    });
  };
  islogin = 'false';
  getIsLoginnnn = async () => {
    try {
      console.log('SHow');
      const value = await AsyncStorage.getItem('@IsLogin');
      if (value !== null) {
        islogin = value;
      } else islogin = 'false';
    } catch (e) {
      return 'error';
    }
  };
  render() {
    const {data} = this.state;
    const ItemTable = data.map((item, index) => {
      return (
        <Table
          navigation={this.props.navigation}
          key={item.id}
          name={item.name}
          user={item.user}
          price={item.price}
          offModal={() =>
            this.setState({visibleInfoGuest: false, opacityView: false})
          }
        />
      );
    });

    //-----------------------------------------------------------------------

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Text style={styles.titile}>Trang chủ</Text>
        </SafeAreaView>
        <Button title="check" onPress={() => storeIsLogin('true')} />
        <Button title="check2" onPress={() => console.log(getIsLogin())} />
        <Button title="check3" onPress={() => removeIsLogin()} />
        <Button title="check4" onPress={() => console.log(this.islogin)} />
        <View style={{flexDirection: 'column'}}>
          <TabLocation />
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.content}>{ItemTable}</View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Sizes.s10,
    padding: Sizes.s10,
    flexWrap: 'wrap',
  },
});
