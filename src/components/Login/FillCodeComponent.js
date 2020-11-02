import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';
import images from '../../res/images/index';
import ProcessLoginComponent from '../Custom/ProcessLoginComponent';

export default class FillCodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={images.bg_login1}
          style={styles.imageBackground}>
          <View
            style={{
              width: '75%',
              height: '55%',
              backgroundColor: '#FFFFFF',
              borderRadius: Sizes.s15,
              // opacity: 0.8,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <ProcessLoginComponent Step={1} />
            <View
              style={{
                width: '80%',

                borderWidth: 1,
                borderColor: '#8C8C8C',
                borderRadius: Sizes.s15,
                alignSelf: 'center',
                paddingHorizontal: Sizes.s15,
              }}>
              <Text style={{color: '#8C8C8C', marginTop: Sizes.s10}}>
                Nhập code
              </Text>
              <TextInput selectionColor="#FADB14" />
            </View>
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
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  fontSize: Sizes.h34,
                }}>
                Hủy
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() =>this.props.navigation.navigate('ConfirmApi')}
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
                Đồng Ý
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '90%',

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
                  color: '#1890FF',
                  fontSize: Sizes.h34,
                  fontFamily: 'Roboto',
                }}>
                Cấu hình bằng tay
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  lineBackground: {
    height: Sizes.s40,
    width: '30%',
    justifyContent: 'center',
  },
});
