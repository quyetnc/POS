import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { userData } from '../../config/settings';
export default class AboutComponent extends Component {
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
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="arrow-left"
              size={20}
              style={{color: 'white', marginLeft: Sizes.s15}}
            />
          </TouchableOpacity>
          <Text style={styles.titile}>About</Text>
          <View/>
        </SafeAreaView>
        <View style={{paddingTop: Sizes.s15, paddingHorizontal: Sizes.s20}}>
          <View>
            <Text style={{fontSize: Sizes.h20, color: 'green'}}>System</Text>
            <View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Propertycode</Text>
                <Text style={styles.textContent}>{userData.PROPERTY_CODE}</Text>
              </View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Outlet Name</Text>
                <Text style={styles.textContent}>{userData.OUTLET_ID}</Text>
              </View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Cashier Code</Text>
                <Text style={styles.textContent}>{userData.CASHIER_ID}</Text>
              </View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Device Code</Text>
                <Text style={styles.textContent}>{userData.DEVICE_CODE}</Text>
              </View>
            </View>
          </View>
          <View style={{paddingTop: Sizes.s20}}>
            <Text style={{fontSize: Sizes.h20, color: 'green'}}>About</Text>
            <View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Version</Text>
                <Text style={styles.textContent}>1.0</Text>
              </View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Build Number</Text>
                <Text style={styles.textContent}>1</Text>
              </View>
              <View
                style={{
                  paddingLeft: Sizes.s20,
                  paddingVertical: Sizes.s15,
                  borderBottomWidth: 1,
                }}>
                <Text style={styles.textContent}>Copyright</Text>
                <Text style={styles.textContent}>FPT Information System</Text>
              </View>
            </View>
          </View>
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
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Sizes.s10,
    padding: Sizes.s10,
    flexWrap: 'wrap',
  },
  textContent: {
    fontSize: Sizes.h20,
  },
});
