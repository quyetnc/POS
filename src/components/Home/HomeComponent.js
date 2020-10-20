import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Table from './TableComponent';
import TabLocation from './TabLocation';
import {
  objectIsNull,
  arrayIsEmpty,
  stringIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';
import AsyncStorage from '@react-native-community/async-storage';
import { userData } from '../../config/settings';
import TabLayout from '../Custom/TabLayout';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabData: [],
      tableData: [],
      opacityView: false,
      visibleInfoGuest: false,
      locationSelected: 0,
    };
  }

  async componentDidMount() {
    this.props.onGetLocationTableAction();
  }
  async componentDidUpdate(prevProps) {
    if (
      prevProps.getLocationTableReducers !== this.props.getLocationTableReducers
    ) {
      if (!objectIsNull(this.props.getLocationTableReducers)) {
        let arrLocation = [];
        let indexTMP = 0;
        // console.log(this.props.getLocationTableReducers);
        await this.props.getLocationTableReducers[0].map((item) => {
          arrLocation.push({
            id: indexTMP++,
            label: item.NAME,
            value: item.LOCATION_ID,
          });
        });

        this.setState({
          tabData: arrLocation,
          tableData: this.props.getLocationTableReducers[1],
        });
      }
    }
  }

  getLocation = () => { };
  render() {
    const { data, tabData, tableData } = this.state;

    const ItemTable = tableData.map((item, index) => {
      return (
        <Table
          navigation={this.props.navigation}
          STT={item.STT}
          DINING_TABLE_ID={item.DINING_TABLE_ID}
          OUTLET_ID={item.OUTLET_ID}
          NAME={item.NAME}
          COVERS={item.COVERS}
          CHECK_ID={item.CHECK_ID}
          USING_CASHIER_ID={item.USING_CASHIER_ID}
          WAITER={item.WAITER}
          BALANCE={item.BALANCE}
          GUEST_NAME={item.GUEST_NAME}
          MINUTE_ORDER={item.MINUTE_ORDER}
          FIRE={item.FIRE}
          PRINT_COUNT={item.PRINT_COUNT}
          NO_OF_GUEST={item.NO_OF_GUEST}
          LOCATION_ID={item.LOCATION_ID}
          offModal={() =>
            this.setState({ visibleInfoGuest: false, opacityView: false })
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

        <TabLayout
          dataLocation={this.state.tabData}
          dataTable={this.state.tableData}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  titile: {
    color: '#fff',
    fontSize: Sizes.h24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Sizes.s20,
    padding: Sizes.s20,
    flexWrap: 'wrap',
  },
});
