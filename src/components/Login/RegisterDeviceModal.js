import React, {Component} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';
import Picker from '../Custom/Picker';
import {colors} from '../../res/values/styles/color';

export default class RegisterDeviceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Modal visible={this.props.visibleRegister} transparent={true} animationType="fade">
        <TouchableWithoutFeedback
          onPress={() => {
          this.props.offModal()
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <TouchableWithoutFeedback>
              <View style={[styles.modal]}>
                <Text style={styles.title}>Register Device</Text>
                <View style={{flex: 1, backgroundColor: 'white', justifyContent:'center'}}>
                  <Picker
                    style={{
                      width: '80%',
                      alignSelf: 'center',
                      borderRadius: Sizes.s35,
                      borderColor: colors.black,
                    }}
                    data={this.props.valueProperty} //lable
                    noDataMessage="Dữ Liệu Trống"
                    placeholder="Chọn giá trị"
                    title="Chọn Platform"
                    value={this.props.propertySelection.label}
                    position="flex-start" //flex-end, flex-start, center
                    onChangeItem={(item) =>
                      this.props.setPropertySelection(item)
                    }
                    //   setOpacity={() =>
                    //     this.setState({opacityView: !this.state.opacityView})
                    //   }
                  />
                  <Picker
                    style={{
                      width: '80%',
                      alignSelf: 'center',
                      borderRadius: Sizes.s35,
                      borderColor: colors.black,
                    }}
                    data={this.props.valueOutlet} //lable
                    noDataMessage="Dữ Liệu Trống"
                    placeholder="Chọn giá trị"
                    title="Chọn Platform"
                    value={this.props.outletSelection.label}
                    position="flex-end" //flex-end, flex-start, center
                    onChangeItem={(item) => this.props.setOutletSelection(item)}
                    //   setOpacity={() =>
                    //     this.setState({opacityView: !this.state.opacityView})
                    //   }
                  />
                </View>
                <View
                  style={{flexDirection: 'row', justifyContent: 'flex-end', marginBottom :Sizes.s25}}>
                  <TouchableOpacity
                    style={{
                      padding: Sizes.s20,
                      backgroundColor: 'orange',
                      borderRadius: Sizes.s30,
                      marginRight: Sizes.s20,
                      width: '15%',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white'}}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      padding: Sizes.s20,
                      backgroundColor: 'blue',
                      borderRadius: Sizes.s30,
                      marginRight: '10%',
                      width: '15%',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: 'white'}}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: Sizes.s40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: Sizes.s15,
    borderColor: '#EFEFEF',
    borderBottomWidth: Sizes.s2,
  },
  item: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Sizes.s30,
    marginHorizontal: Sizes.s30,
    borderColor: '#EFEFEF',
    borderBottomWidth: Sizes.s2 * 0.7,
  },
  pickerStyle: {
    borderColor: '#D7DDE3',
    borderWidth: 1,
    paddingVertical: Sizes.s20,
    marginTop: Sizes.s10,
    marginBottom: Sizes.s10,
    borderRadius: Sizes.s7,
    justifyContent: 'center',
    paddingHorizontal: Sizes.s10,
  },
  modal: {
    height: '40%',
    borderRadius: Sizes.s40,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
  },
});
