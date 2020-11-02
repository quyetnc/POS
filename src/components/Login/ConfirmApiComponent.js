import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ProcessLoginComponent from '../../components/Custom/ProcessLoginComponent';
import images from '../../res/images/index';

import {Sizes} from '@dungdang/react-native-basic';

export default class ConfirmApiComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{flex: 0.5, justifyContent: 'center'}}>
            <ProcessLoginComponent Step={2} />
            <View
              style={{
                width: '98%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View style={[styles.sizeContentItem, {width: '30%'}]}>
                  <Text style={{color: '#8C8C8C'}}>Nhập code</Text>
                  <Text>DV11</Text>
                </View>
                <View style={[styles.sizeContentItem, {width: '60%'}]}>
                  <Text style={{color: '#8C8C8C'}}>Tên khách sạn</Text>
                  <Text>Khách sạn GRAND Sài Gòn</Text>
                </View>
              </View>
              <View style={[styles.sizeContentItem]}>
                <Text style={{color: '#8C8C8C'}}>API Url</Text>
                <Text>http://GrandSG.saigontouris.com.vn/pos.api</Text>
              </View>
              <View style={[styles.sizeContentItem]}>
                <Text style={{color: '#8C8C8C'}}>Logo</Text>
                <Text>http://GrandSG.saigontouris.com.vn/pos.api</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.3,
              height: '100%',
              width: '100%',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={images.ic_main}
              style={{
                width: '30%',

                alignSelf: 'center',
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{
              width: '90%',
              backgroundColor: '#1890FF',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: Sizes.s20,
              padding: Sizes.s20,
              borderRadius: Sizes.s15,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: Sizes.h34,
              }}>
              Xác Nhận
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: '#8C8C8C',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: Sizes.s20,
              padding: Sizes.s20,
              borderRadius: Sizes.s15,
              alignSelf: 'center',
            }}
            onPress={() => this.props.navigation.goBack()}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: Sizes.h34,
              }}>
              Hủy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  sizeContentItem: {
    width: '92%',
    margin: Sizes.s10,
    padding: Sizes.s15,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    borderRadius: Sizes.s15,
    paddingHorizontal: Sizes.s15,
  },
});
