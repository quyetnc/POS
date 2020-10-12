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
import { Sizes } from '@dungdang/react-native-basic';
import images from '../../res/images/index';
import Picker from '../Custom/Picker';
import { colors } from '../../res/values/styles/color';
import RegisterDeviceModal from './RegisterDeviceModal';
import ViewOpaticy from '../Custom/ViewOpaticy';
import DeviceInfo from 'react-native-device-info';

export default class LoginComponent extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      deviceBodyCheck: '',
      macAddress: '',
      propertySelection: null,
      outletSelection: null,
      valueProperty: [],
      valueOutlet: [],
      passCode: '',
      visibleRegister: false,
      opacityView: false
    };
  }
  componentDidMount() {
    this.props.onGetAllPropertyAction()
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.allPropertyReducers !== this.props.allPropertyReducers) {
      this.getAllProperty();
    }

    if (prevProps.outletReducers !== this.props.outletReducers) {
      this.setOutlet();
    }
  }

  getAllProperty = () => {
    let arrProperty = [];
    let indexTMP = 0;

    this.props.allPropertyReducers.map((item) => {
      arrProperty.push({
        id: indexTMP++,
        label: item.NAME,
        value: item.CODE,
      });
    });

    this.setState({valueProperty: arrProperty}, () => {
      this.setState({propertySelection: arrProperty[0]});
      this.getOutlet(this.state.valueProperty[0].value);
    });
  };

  getOutlet = (code) => {
    this.props.onGetOutletAction(code);
  };
  setOutlet = () => {
    let arrOutlet = [];
    let indexTMP = 0;
    this.props.outletReducers.map((item) => {
      arrOutlet.push({
        id: indexTMP++,
        value: item.OUTLET_ID,
        code: item.OUTLET_CODE,
        label: item.NAME,
      });

      // let letArrRoom = [];
      // item.room.map((item2) => {
      //   letArrRoom.push({
      //     value: item2._id,
      //     label: item2.roomName + '-' + item2.location,
      //   });
      // });
      // arrRoom.push(letArrRoom);
    });

    this.setState({ valueProperty: arrProperty });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.opacityView === true ? (
          <ViewOpaticy />
        ) : (
            <View />
          )}

        <RegisterDeviceModal
          visibleRegister={this.state.visibleRegister}
          valueProperty={this.state.valueProperty}
          valueOutlet={this.state.valueOutlet}
          setPropertySelection={(text) =>
            this.setState({ propertySelection: text })
          }
          setOutletSelection={(text) => this.setState({ outletSelection: text })}
          propertySelection={this.state.propertySelection}
          outletSelection={this.state.outletSelection}
          offModal={() => this.setState({ visibleRegister: false, opacityView: false })}
        />
        <ScrollView
          contentContainerStyle={[{ justifyContent: 'center', flexGrow: 1 }]}>
          <View style={{ alignItems: 'center' }}>
            <Image
              resizeMode="contain"
              source={images.ic_fpt_is}
              style={{ width: '30%' }}
            />
          </View>
          <View style={{ marginTop: Sizes.s40 }}>
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
              onChangeItem={(item) => this.setState({ itemValue: item })}
              setOpacity={() =>
                this.setState({ opacityView: !this.state.opacityView })
              }
            />

            <Picker
              style={{
                width: '80%',
                alignSelf: 'center',
                borderRadius: Sizes.s35,
                borderColor: colors.black,
              }}
              data={this.state.valueOutlet} //lable
              noDataMessage="Dữ Liệu Trống"
              placeholder="Chọn giá trị"
              title="Chọn Platform"
              value={this.state.propertySelection.label}
              position="flex-end" //flex-end, flex-start, center
              onChangeItem={(item) => this.setState({ itemValue: item })}
              setOpacity={() =>
                this.setState({ opacityView: !this.state.opacityView })
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
                onChangeText={(text) => this.setState({ passCode: text })}
              />
            </View>

            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                marginTop: Sizes.s15,
                marginLeft: Sizes.s25,
              }}>
              <Text style={{ color: colors.red, fontWeight: 'bold' }}>
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
              style={{ alignItems: 'center', marginTop: Sizes.s5 }}
              onPress={() => { this.setState({ opacityView: true, visibleRegister: true }) }}>
              <Text style={{ fontWeight: 'bold' }}>Register Device</Text>
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
