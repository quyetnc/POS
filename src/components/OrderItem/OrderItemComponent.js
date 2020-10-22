import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MenuOrderContainer from '../../containers/OrderItem/MenuOrderContainer';
import DetailOrderContainer from '../../containers/OrderItem/DetailOrderContainer';

const Tab = createMaterialTopTabNavigator();
class OrderItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false,
      visible: false,
      detailsItem: [],
      showTab: false,
      isRemind: false,
      visibleRemind: false,
    };
  }
  componentDidMount() {
    // this.getOrderItem();

    this.props.onPostGetDetailOrderAction(this.props.route.params.checkID);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.detailOrderReducers !== this.props.detailOrderReducers) {
      this.setState({ detailsItem: this.props.detailOrderReducers }, () =>
        this.loadDone(),
      );
    }
  }
  loadDone = () => {
    this.setState({ showTab: true });
  };
  getOrderItem = () => {
    // CheckDetailService.getOrderedItemCheck(
    //   this.props.route.params.checkID,
    // ).then((res) => {
    //   if (this._isMounted) {
    //     this.setState({
    //       detailsItem: res.data,
    //       showTab: true,
    //     });
    //   }
    // });
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="arrow-left"
              size={20}
              style={{ color: 'white', marginLeft: Sizes.s15 }}
            />
          </TouchableOpacity>

          <Text style={styles.titile}>Order Item</Text>
          <Icon
            name="ellipsis-v"
            size={20}
            style={{ color: 'white', marginRight: Sizes.s15 }}
          />
        </SafeAreaView>
        {this.state.showTab ? (
          <Tab.Navigator
          // initialRouteName={
          //   this.props.isSave ? "DetailOrderScreen" : "CaptainOrderScreen"
          // }
          >
            <Tab.Screen
              name="CaptainOrderScreen"
              component={MenuOrderContainer}
              options={{
                title: 'Captain Order',
              }}
              initialParams={{ guestInfo: this.props.route.params.guestInfo }}
            />
            <Tab.Screen
              name="DetailOrderScreen"
              component={DetailOrderContainer}
              options={{ title: 'Detail Order' }}
              initialParams={{ detailsItem: this.state.detailsItem }}
            />
          </Tab.Navigator>
        ) : (
            <View
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Sizes.s100,
    backgroundColor: '#4dbd73',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titile: {
    color: '#fff',
    fontSize: Sizes.h24,
    fontWeight: 'bold',
  },
});

export default OrderItemComponent;
