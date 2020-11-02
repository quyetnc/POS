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
import {Sizes} from '@dungdang/react-native-basic';
import images from '../../res/images/index';
import Picker from '../Custom/Picker';
import {colors} from '../../res/values/styles/color';
import RegisterDeviceModal from './RegisterDeviceModal';
import ViewOpaticy from '../Custom/ViewOpaticy';
import DeviceInfo from 'react-native-device-info';
import ProcessLoginComponent from '../Custom/ProcessLoginComponent';

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
      isLoading: false,
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
            isLoading: false,
          });
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

    this.setState({valueProperty: arrProperty}, () => {
      this.setState({propertySelection: arrProperty[0]}, () => {});
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

    this.setState({valueOutlet: arrOutlet}, () =>
      this.setState({outletSelection: arrOutlet[0]}),
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
      isLoading: true,
    });
  };
  render() {
    const {isLoading} = this.state;
    const Loading =
      isLoading === true ? (
        <ActivityIndicatorBase size="large" color="#00ff00" />
      ) : null;
    return (
      <SafeAreaView style={styles.container}>
        {this.state.opacityView === true ? <ViewOpaticy /> : <View />}

        <RegisterDeviceModal
          visibleRegister={this.state.visibleRegister}
          valueProperty={this.state.valueProperty}
          valueOutlet={this.state.valueOutlet}
          setPropertySelection={(item) =>
            this.setState({propertySelection: item})
          }
          setOutletSelection={(item) => this.setState({outletSelection: item})}
          propertySelection={this.state.propertySelection}
          outletSelection={this.state.outletSelection}
          offModal={() =>
            this.setState({visibleRegister: false, opacityView: false})
          }
          postRegisterDevicee={() => this.postRegisterDevice()}
        />
        <ScrollView
          contentContainerStyle={[
            {flex: 1, justifyContent: 'center', flexGrow: 1},
          ]}>
          <ProcessLoginComponent Step={3} />
          <View
            style={{
              flex: 0.6,
              height: '100%',
              width: '100%',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={images.ic_main}
              style={{
                width: '25%',
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{marginTop: Sizes.s40}}>
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                borderRadius: Sizes.s35,
                borderColor: colors.black,
              }}>
              <Text style={{fontSize: Sizes.h30, fontWeight: 'bold'}}>
                Khách sạn
              </Text>
            </View>

            <Picker
              style={{
                width: '80%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderRadius: Sizes.s15,
                elevation: Sizes.s15,
                // borderColor: colors.black,
              }}
              data={this.state.valueProperty} //lable
              noDataMessage="Dữ Liệu Trống"
              placeholder="Chọn Property"
              title="Chọn Property"
              value={this.state.propertySelection}
              onChangeItem={(item) =>
                this.setState({propertySelection: item}, () =>
                  this.getOutlet(item.value),
                )
              }
            />
            <View
              style={{
                width: '80%',
                alignSelf: 'center',
                borderRadius: Sizes.s35,
                borderColor: colors.black,
              }}>
              <Text style={{fontSize: Sizes.h30, fontWeight: 'bold'}}>
                Nhà hàng
              </Text>
            </View>

            <Picker
              style={{
                width: '80%',
                alignSelf: 'center',
                backgroundColor: 'white',
                borderRadius: Sizes.s15,
                elevation: Sizes.s15,
                // borderColor: colors.black,
              }}
              data={this.state.valueOutlet} //lable
              noDataMessage="Dữ Liệu Trống"
              placeholder="Chọn Outlet"
              title="Chọn Outlet"
              value={this.state.outletSelection}
              onChangeItem={(item) => this.setState({outletSelection: item})}
            />

            <View style={[styles.sizeContentItem]}>
              <Text style={{color: '#8C8C8C'}}>Nhập Passcode</Text>

              <TextInput
                style={{
                  paddingVertical: 0,
                }}
                placeholder="Passcode"
                value={this.state.passCode}
                keyboardType="numeric"
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
                {this.state.passCode === ''
                  ? 'Passcode không được để trống!'
                  : ''}
              </Text>
            </View>

            <View
              style={{
                alignSelf: 'center',
                width: '70%',
                paddingTop: Sizes.s40,
              }}></View>

            {/* <TouchableOpacity
              style={{alignItems: 'center', marginTop: Sizes.s5}}
              onPress={() => {
                this.setState({opacityView: true, visibleRegister: true});
              }}>
              <Text style={{fontWeight: 'bold'}}>Đăng ký thiết bị</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity
            disabled={this.state.passCode == '' ? true : false}
            onPress={() => this.onLogin()}
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
              Đăng Nhập
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
            onPress={() => {
              this.setState({opacityView: true, visibleRegister: true});
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#FFFFFF',
                fontSize: Sizes.h34,
              }}>
              Đăng Ký Thiết Bị
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sizeContentItem: {
    width: '80%',
    margin: Sizes.s10,
    padding: Sizes.s15,
    borderWidth: 1,
    borderColor: '#8C8C8C',
    borderRadius: Sizes.s15,
    paddingHorizontal: Sizes.s15,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
});
