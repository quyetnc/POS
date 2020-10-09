import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';
import images from '../../res/images/index';
import Picker from '../Custom/Picker';
import {colors} from '../../res/values/styles/color';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceBodyCheck: '',
      macAddress: '',
      propertySelection: '',
      outletSelection: '',
      valueProperty: [],
      valueOutlet: [],
      passCode: '',
      visibleRegister: false,
      opacityView: false,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={[{justifyContent: 'center', flexGrow: 1}]}>
          <View style={{alignItems: 'center'}}>
            <Image
              resizeMode="contain"
              source={images.ic_fpt_is}
              style={{width: '30%'}}
            />
          </View>
          <View style={{marginTop: Sizes.s40}}>
            <Picker
              style={{
                width: '80%',
                alignSelf: 'center',
                borderRadius: Sizes.s35,
                borderColor: colors.black,
                height: Sizes.s60,
              }}
              data={this.state.valueProperty} //lable
              noDataMessage="Dữ Liệu Trống"
              placeholder="Chọn giá trị"
              title="Chọn Platform"
              value={this.state.propertySelection.label}
              position="flex-end" //flex-end, flex-start, center
              onChangeItem={(item) => this.setState({itemValue: item})}
              setOpacity={() =>
                this.setState({opacityView: !this.state.opacityView})
              }
            />
            <Picker
              style={{
                width: '80%',
                alignSelf: 'center',
                borderRadius: Sizes.s35,
                borderColor: colors.black,
                height: Sizes.s60,
              }}
              data={this.state.valueProperty} //lable
              noDataMessage="Dữ Liệu Trống"
              placeholder="Chọn giá trị"
              title="Chọn Platform"
              value={this.state.propertySelection.label}
              position="flex-end" //flex-end, flex-start, center
              onChangeItem={(item) => this.setState({itemValue: item})}
              setOpacity={() =>
                this.setState({opacityView: !this.state.opacityView})
              }
            />
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: Sizes.s5,
              }}>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: Sizes.s35,
                  borderColor: colors.black,
                  height: Sizes.s60,
                  paddingHorizontal: Sizes.s25,
                }}
                placeholder="Passcode"
              />
            </View>
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: Sizes.s5,
              }}>
             <Text style = {{color :'red'}}>Passcode is not empty!</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
