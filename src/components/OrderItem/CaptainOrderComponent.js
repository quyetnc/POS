import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {dataMenu} from '../../config/settings';
import {
  objectIsNull,
  arrayIsEmpty,
  stringIsEmpty,
} from '@dungdang/react-native-basic/src/Functions';
class CaptainOrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataOrder: [],
      categoryMenu: [],
      visibleModal: false,
      showMenuItem: false,
      fullMenu: [],
      menuCategoryChoose: 1267,
    };
  }
  currencyFormat = (num) => {
    if (num == 0) {
      return '';
    } else {
      return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
  };

  async componentDidMount() {
    this.props.onPostGetFullMenuAction();
    dataMenu.isSaveMenu == true
      ? this.setState({menuItem: dataMenu.CATEGORY_MENU})
      : this.props.onGetCategoryMenuAction();
  }
  async componentDidUpdate(preProps) {
    if (preProps.categoryMenuReducers !== this.props.categoryMenuReducers) {
      if (!objectIsNull(this.props.categoryMenuReducers)) {
        this.setState({categoryMenu: this.props.categoryMenuReducers}, () => {
          dataMenu.CATEGORY_MENU = this.props.categoryMenuReducers;
        });
      }
    }
    if (preProps.fullMenuReducers !== this.props.fullMenuReducers) {
      // console.log(this.props.fullMenuReducers)
      if (!objectIsNull(this.props.fullMenuReducers)) {
        this.setState({fullMenu: this.props.fullMenuReducers}, () => {
          dataMenu.FULL_MENU = this.props.fullMenuReducers;
        });
      }
    }
  }

  renderItem = ({item, index}) => {
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,

        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
      }}>
      <Text>Súp</Text>
      <Text style={[styles.itemCell, {textAlign: 'right'}]}>2</Text>
      <Text style={[styles.itemCell, {textAlign: 'right'}]}>
        {this.currencyFormat(10000000)}
      </Text>
    </View>;
  };

  renderItemMenu = ({item, index}) => (
    <View
      style={{
        height: Sizes.s150,
        flex: 1 / 3,
        backgroundColor: 'blue',
        margin: Sizes.s5,
      }}>
      <Text style={{fontSize: Sizes.s20}}>{item.NAME2}</Text>
    </View>
  );

  showMenu = () => {
    this.setState({visibleModal: true});
  };
  offMenu = () => {
    this.setState({visibleModal: false});
  };

  render() {
    const {visibleModal, showMenuItem} = this.state;
    const Menu =
      showMenuItem === true ? (
        <View style={styles.listMenu}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            {this.state.categoryMenu.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{padding: 10}}
                  onPress={() =>
                    this.setState({menuCategoryChoose: item.MENU_ID}, () => {
                      this.setState({showMenuItem: false});
                      console.log(this.state.menuCategoryChoose);
                    })
                  }>
                  <Text>{item.NAME}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      ) : null;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{flex: 1}}
          data={this.state.dataOrder}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Modal visible={visibleModal} animationType="fade">
          <View style={{flex: 1}}>
            <SafeAreaView style={styles.header}>
              <TouchableOpacity onPress={this.offMenu}>
                <Icon2
                  name="remove"
                  size={20}
                  style={{color: 'white', marginLeft: Sizes.s25}}
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={{marginRight: Sizes.s50}}>
                  <Icon name="search" size={Sizes.s45} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 20,
                    marginRight: Sizes.s30,
                    paddingVertical: 5,
                    alignItems: 'center',
                  }}
                  onPress={() => this.setState({showMenuItem: !showMenuItem})}>
                  <Icon
                    name="ellipsis-v"
                    size={Sizes.s45}
                    style={{color: 'white'}}
                  />
                </TouchableOpacity>
              </View>
            </SafeAreaView>

            {Menu}

            <FlatList
              style={{flex: 1, borderWidth: 1, backgroundColor: 'white'}}
              contentContainerStyle={{justifyContent: 'center'}}
              data={this.state.fullMenu.filter(
                (item) => item.MENU_ID == this.state.menuCategoryChoose,
              )}
              renderItem={this.renderItemMenu}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
            />
            <Button
              title="Check"
              onPress={() => console.log(this.state.fullMenu)}
            />
            <TouchableOpacity style={styles.floatingBtnCart}>
              <Icon name="shopping-cart" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity style={styles.floatingBtn} onPress={this.showMenu}>
          <Icon name="plus" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onPostInsertOrderAction()}>
          <View style={styles.totalBottom}>
            <Text style={styles.total}>Save</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  itemCell: {
    width: '33%',
  },
  header: {
    height: Sizes.s100,
    backgroundColor: '#4dbd73',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  totalBottom: {
    padding: Sizes.s20,
    backgroundColor: '#2dadd2',
    alignItems: 'center',
  },
  total: {
    fontSize: Sizes.h28,
    color: '#fff',
  },
  floatingBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2dadd2',
    position: 'absolute',
    bottom: Sizes.s140,
    right: Sizes.s25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  floatingBtnCart: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2dadd2',
    position: 'absolute',
    bottom: Sizes.s40,
    right: Sizes.s25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  listMenu: {
    backgroundColor: 'white',
    position: 'absolute',
    right: Sizes.s15,
    top: Sizes.s100,
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height * 0.7,
    borderRadius: 2,
    elevation: 10,
    zIndex: 2,
  },
});

export default CaptainOrderComponent;
