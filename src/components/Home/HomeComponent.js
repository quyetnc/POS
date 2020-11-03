import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  FlatList,
  Image,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';

import TabItem from './TabItem';
import {
  objectIsNull,
  arrayIsEmpty,
  stringIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';
import images from '../../res/images/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityView: false,
      visibleInfoGuest: false,
      dataLocation: [],
      dataTable: [],
      loading: true,
      nameLocation: '',
      modalLocation: false,
      selectedItem: null,
    };
  }

  async componentDidMount() {
    this.props.onGetLocationAction();
    this.props.onGetAllTableMapAction();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps.getLocationReducers !== this.props.getLocationReducers) {
      if (!objectIsNull(this.props.getLocationReducers)) {
        await this.setState({
          dataLocation: this.props.getLocationReducers,
          nameLocation:
            'Khu vực' + ' ' + this.props.getLocationReducers[0].NAME,
          selectedItem: this.props.getLocationReducers[0],
        });
      } else {
        alert('Get Data Location Error');
      }
    }
    if (prevProps.tableMapReducers !== this.props.tableMapReducers) {
      if (!objectIsNull(this.props.tableMapReducers)) {
        await this.setState({dataTable: this.props.tableMapReducers}, () =>
          this.setState({loading: false}),
        );
      } else {
        alert('Get Data Table Error');
      }
    }
  }

  openModal = () => {
    this.setState({
      modalLocation: !this.state.modalLocation,
    });
  };
  renderItem = ({item, index}) => (
    <TouchableOpacity
      key={index}
      style={styles.itemLocation}
      onPress={() => {
        this.setState({
          selectedItem: item,
          nameLocation: 'Khu vực' + ' ' + item.NAME,
          modalLocation: !this.state.modalLocation,
        });
      }}>
      <Text
        style={[
          {fontSize: Sizes.s30},
          this.state.selectedItem == item
            ? {fontWeight: 'bold', color: '#0294e1'}
            : {fontWeight: 'bold', color: '#000'},
        ]}>
        {'Khu vực' + ' ' + item.NAME}
      </Text>
    </TouchableOpacity>
  );
  render() {
    const {
      nameLocation,
      modalLocation,
      dataLocation,
      selectedItem,
    } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}
            style={styles.IconDraw}>
            <Icon name="bars" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.openModal()}>
            <Text style={{marginRight: Sizes.s20, color: 'white'}}>
              {nameLocation}
            </Text>
            <Icon name="chevron-down" size={13} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
        {this.state.loading == true ? (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#00ff00" />
          </View>
        ) : (
          <View style={{flex: 1}}>
            <TabItem
              tabData={this.state.selectedItem}
              tableData={this.state.dataTable}
            />
          </View>
        )}

        <Modal
          animationType="slide"
          transparent={this.state.modalLocation}
          visible={modalLocation}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalTitle}>
                <TouchableOpacity
                  onPress={() => this.setState({modalLocation: false})}
                  style={{paddingHorizontal: 10}}>
                  <Image
                    source={images.ic_cancel}
                    resizeMode="contain"
                    style={{width: Sizes.s25}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    marginLeft: Sizes.s25,
                    fontWeight: 'bold',
                    textAlignVertical: 'center',
                  }}>
                  Chọn khu vực
                </Text>
              </View>
              <FlatList
                data={dataLocation}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
              />
            </View>
          </View>
        </Modal>
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
    backgroundColor: '#1890FF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titile: {
    color: '#fff',
    fontSize: Sizes.h24,
    fontWeight: 'bold',
  },
  IconDraw: {
    position: 'absolute',
    left: Sizes.s30,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Sizes.s20,
    padding: Sizes.s20,
    flexWrap: 'wrap',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    width: '100%',
    height: '65%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalTitle: {
    flexDirection: 'row',
    paddingHorizontal: Sizes.s30,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  itemLocation: {
    marginHorizontal: Sizes.h38,
    paddingTop: Sizes.h32,
    paddingBottom: Sizes.h16,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
});
