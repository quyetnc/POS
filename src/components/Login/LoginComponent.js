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
  ActivityIndicatorBase,
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
      passCode: '7',
      visibleRegister: false,
      opacityView: false,
      propertyShow: false,
      outletShow: false,
      deviceBodyFull: [],
      isLoading: false
    };
  }
  async componentDidMount() {
    this._isMounted = true;
    this.getMacAddressDevice();
    await this.props.onGetAllPropertyAction();
    // this.setState({
    //   propertySelection: valueProperty[0],
    //   outletSelection: valueOutlet[0],
    // });
  }

  getMacAddressDevice = async () => {
    let mac = await DeviceInfo.getMacAddress();
    if (this._isMounted) {
      this.setState(
        {
          deviceBodyCheck: {
            ...this.state.deviceBodyCheck,
            NAME: mac,
          },
        },
        () => {
          // console.log('deviceBodyCheck: ', this.state.deviceBodyCheck);
        },
      );
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.allPropertyReducers !== this.props.allPropertyReducers) {
      this.getAllProperty();
    }

    if (prevProps.outletReducers !== this.props.outletReducers) {
      this.setOutlet();
    }

    if (prevProps.statusRegisterDevice !== this.props.statusRegisterDevice) {
      this.props.statusRegisterDevice === true
        ? alert('Register Device Success!')
        : {};
    }
    if (prevProps.statusCheckDevice !== this.props.statusCheckDevice) {
      if (this.props.statusCheckDevice.status === 0) {
        alert(this.props.statusCheckDevice.mess);
      } else {
        // console.log(this.props.statusCheckDevice);

        setTimeout(() => {
          this.setState({
            isLoading: false
          })
          this.props.navigation.navigate('Home');
        }, 1000);
      }
    }
  }

  getAllProperty = async () => {
    let arrProperty = [];
    let indexTMP = 0;

    await this.props.allPropertyReducers.map((item) => {
      arrProperty.push({
        id: indexTMP++,
        label: item.NAME,
        value: item.CODE,
      });
    });

    this.setState({ valueProperty: arrProperty }, () => {
      this.setState({ propertySelection: arrProperty[0] }, () => { });
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
    });

    this.setState({ valueOutlet: arrOutlet }, () =>
      this.setState({ outletSelection: arrOutlet[0] }),
    );
  };
  postRegisterDevice = () => {
    if (this._isMounted) {
      this.setState(
        {
          deviceBodyCheck: {
            ...this.state.deviceBodyCheck,
            PROPERTY_CODE: this.state.propertySelection.value,
            OUTLET_ID: this.state.outletSelection.value,
            LANG_CODE: 'en',
          },
        },
        () => {
          this.props.onPostRegisterDeviceAction(this.state.deviceBodyCheck);
        },
      );
    }
  };

  postCheckDevice = () => {
    if (this._isMounted) {
      this.setState(
        {
          deviceBodyCheck: {
            ...this.state.deviceBodyCheck,
            PROPERTY_CODE: this.state.propertySelection.value,
            OUTLET_ID: this.state.outletSelection.value,
          },
          deviceBodyFull: {
            PROPERTY_CODE: this.state.propertySelection.value,
            OUTLET_ID: this.state.outletSelection.value,
            // NAME_INTERNAL: this.state.deviceBodyCheck.NAME,
            NAME_INTERNAL: '2913700881fe2765',
            PASSCODE: this.state.passCode,
          },
        },
        () => {
          let box = [this.state.deviceBodyCheck, this.state.deviceBodyFull];
          this.props.onPostCheckDeviceAction(box);
        },
      );
    }
  };

  onLogin = () => {
    this.postCheckDevice();
    this.setState({
      isLoading: true
    })
  };
  render() {
    const { isLoading } = this.state;
    const Loading = isLoading === true ? <ActivityIndicatorBase size="large" color="#00ff00" /> : null
    return (
      <SafeAreaView style={styles.container}>

        {this.state.opacityView === true ? <ViewOpaticy /> : <View />}

        <RegisterDeviceModal
          visibleRegister={this.state.visibleRegister}
          valueProperty={this.state.valueProperty}
          valueOutlet={this.state.valueOutlet}
          setPropertySelection={(item) =>
            this.setState({ propertySelection: item })
          }
          setOutletSelection={(item) => this.setState({ outletSelection: item })}
          propertySelection={this.state.propertySelection}
          outletSelection={this.state.outletSelection}
          offModal={() =>
            this.setState({ visibleRegister: false, opacityView: false })
          }
          postRegisterDevicee={() => this.postRegisterDevice()}
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
              placeholder="Chọn Property"
              title="Chọn Property"
              value={this.state.propertySelection}
              onChangeItem={(item) =>
                this.setState({ propertySelection: item }, () =>
                  this.getOutlet(item.value),
                )
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
              placeholder="Chọn Outlet"
              title="Chọn Outlet"
              value={this.state.outletSelection}
              onChangeItem={(item) => this.setState({ outletSelection: item })}
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
                keyboardType='numeric'
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
                {this.state.passCode === '' ? 'Passcode không được để trống!' : ''}
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
                  backgroundColor: 'blue',
                  padding: Sizes.s15,
                }}
                disabled={this.state.passCode == '' ? true : false}
                onPress={() => this.onLogin()}>
                <Text style={{ color: 'white' }}>Đăng nhập</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ alignItems: 'center', marginTop: Sizes.s5 }}
              onPress={() => {
                this.setState({ opacityView: true, visibleRegister: true });
              }}>
              <Text style={{ fontWeight: 'bold' }}>Đăng ký thiết bị</Text>
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
