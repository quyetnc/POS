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
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';
import images from '../../res/images/index';
import Picker from '../Custom/Picker';
import {colors} from '../../res/values/styles/color';
import RegisterDeviceModal from './RegisterDeviceModal';
import ViewOpaticy from '../Custom/ViewOpaticy'
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
      opacityView : false
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.opacityView === true ? (
         <ViewOpaticy/>
        ) : (
          <View />
        )}

        <RegisterDeviceModal
          visibleRegister = {this.state.visibleRegister}
          valueProperty={this.state.valueProperty}
          valueOutlet={this.state.valueOutlet}
          setPropertySelection={(text) =>
            this.setState({propertySelection: text})
          }
          setOutletSelection={(text) => this.setState({outletSelection: text})}
          propertySelection={this.state.propertySelection}
          outletSelection={this.state.outletSelection}
          offModal = {() => this.setState({visibleRegister : false, opacityView :false})}
        />
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
                  paddingHorizontal: Sizes.s25,
                  paddingVertical: Sizes.s20,
                }}
                placeholder="Passcode"
                value={this.state.passCode}
                onChangeText={(text) => this.setState({passCode: text})}
              />
            </View>

            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: Sizes.s15,
                marginLeft: Sizes.s25,
              }}>
              <Text style={{color: colors.red, fontWeight: 'bold'}}>
                {this.state.passCode === '' ? 'Passcode is not empty!' : ''}
              </Text>
            </View>

            <View
              style={{
                alignSelf: 'center',
                width: '70%',
                paddingTop: Sizes.s40,
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  borderRadius: Sizes.s25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'aqua',
                  padding: Sizes.s15,
                }}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text>Login</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{alignItems: 'center', marginTop: Sizes.s5}}
              onPress = {()=>{this.setState({opacityView:true, visibleRegister : true})}}>
              <Text style={{fontWeight: 'bold'}}>Register Device</Text>
            </TouchableOpacity>
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
