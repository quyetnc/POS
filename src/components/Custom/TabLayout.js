import {Sizes} from '@dungdang/react-native-basic';
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';
import Table from '../Home/TableComponent';
// import Header from '../custom/Header';

const width = Dimensions.get('window').width;

const menu = [
  {id: 0, label: 'A'},
  {id: 1, label: 'B'},
  // { id: 2, label: 'C' },
  // { id: 3, label: 'D' },
  // { id: 4, label: 'E' },
];

const layout = [
  {id: 0, contentLayout: <Text>abc</Text>},
  {id: 1, contentLayout: <Text>XYZ</Text>},
  // { id: 2, label: 'screen C' },
  // { id: 3, label: 'screen D' },
  // { id: 4, label: 'screen E' },
];

export default class TabLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
      menu: [],
      layout: [],
      layoutHandled: [],
    };
  }
  componentDidMount(prevProps) {
    let arrLocationView = [];
      let arrTableView = [];
      this.props.dataLocation.map((item, index) => {
        arrLocationView.push(item);
        let newArray = this.props.dataTable.filter(function (el) {
          return el.LOCATION_ID == item.value;
        });
        arrTableView.push({id: item.id, data: newArray});
      });
      this.setState({menu: arrLocationView});
      this.setState({layout: arrTableView});
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.dataLocation !== prevProps.dataLocation &&
      this.props.dataTable !== prevProps.dataTable
    ) {
      let arrLocationView = [];
      let arrTableView = [];
      this.props.dataLocation.map((item, index) => {
        arrLocationView.push(item);
        let newArray = this.props.dataTable.filter(function (el) {
          return el.LOCATION_ID == item.value;
        });
        arrTableView.push({id: item.id, data: newArray});
      });
      this.setState({menu: arrLocationView});
      this.setState({layout: arrTableView});
    }
  }
  //   handleViewTable = () => {
  //     let arrLayoutTemp = [];
  //     this.state.layout.map((item) => {
  //       let ItemTable = item.data.map((itemm, index) => {
  //         return (
  //           <Table
  //             navigation={this.props.navigation}
  //             STT={itemm.STT}
  //             DINING_TABLE_ID={itemm.DINING_TABLE_ID}
  //             OUTLET_ID={itemm.OUTLET_ID}
  //             NAME={itemm.NAME}
  //             COVERS={itemm.COVERS}
  //             CHECK_ID={itemm.CHECK_ID}
  //             USING_CASHIER_ID={itemm.USING_CASHIER_ID}
  //             WAITER={itemm.WAITER}
  //             BALANCE={itemm.BALANCE}
  //             GUEST_NAME={itemm.GUEST_NAME}
  //             MINUTE_ORDER={itemm.MINUTE_ORDER}
  //             FIRE={itemm.FIRE}
  //             PRINT_COUNT={itemm.PRINT_COUNT}
  //             NO_OF_GUEST={itemm.NO_OF_GUEST}
  //             LOCATION_ID={itemm.LOCATION_ID}
  //           />
  //         );
  //       });
  //       arrLayoutTemp.push({id: item.id, contentLayout: ItemTable});
  //     });
  //     this.setState({layoutHandled: arrLayoutTemp});
  //   };
  renderMenu = ({item, index}) => (
    <TouchableOpacity
      onPress={async () => {
        //scroll tới trang theo index
        this.flatListScreenRef.scrollToIndex({animated: true, index: item.id});
      }}
      key={item.id}
      style={{
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.2,
        paddingVertical: Sizes.s20,
        borderColor: this.state.selectedTab === item.id ? 'red' : '#e2e2e2',
        borderBottomWidth: this.state.selectedTab === item.id ? 2 : 1,
      }}>
      <Text
        style={{
          fontSize: Sizes.s25,
          color: this.state.selectedTab === item.id ? 'red' : 'black', //đổi màu chữ khi nhấn
        }}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  renderScreens = ({item}) => (
    <View
      style={{
        flexDirection: 'column',
        //   backgroundColor: 'blue',
        width: Dimensions.get('window').width,
        flex: 1,
      }}>
      <FlatList
        contentContainerStyle={{alignItems:'stretch', flexGrow:1,}}
        data={item.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <Table
              navigation={this.props.navigation}
              STT={item.STT}
              DINING_TABLE_ID={item.DINING_TABLE_ID}
              OUTLET_ID={item.OUTLET_ID}
              NAME={item.NAME}
              COVERS={item.COVERS}
              CHECK_ID={item.CHECK_ID}
              USING_CASHIER_ID={item.USING_CASHIER_ID}
              WAITER={item.WAITER}
              BALANCE={item.BALANCE}
              GUEST_NAME={item.GUEST_NAME}
              MINUTE_ORDER={item.MINUTE_ORDER}
              FIRE={item.FIRE}
              PRINT_COUNT={item.PRINT_COUNT}
              NO_OF_GUEST={item.NO_OF_GUEST}
              LOCATION_ID={item.LOCATION_ID}
            />
          );
        }}
      />
      
    </View>
  );

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <Header title={'TabLayout'} onPressBackButton={() => this.props.navigation.goBack()} /> */}
        {/* //////menu/////// */}
        {/* <Button title="Chekc" onPress={() => console.log(this.state.layout)} /> */}
        <View>
          <FlatList
            data={this.state.menu}
            renderItem={this.renderMenu}
            keyExtractor={(item, index) => index}
            ref={(ref) => {
              this.flatListMenuRef = ref;
            }}
            scrollEventThrottle={16}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
          />
        </View>
        {/* //////screen/////// */}
        <FlatList
          onScroll={async (event) => {
            await this.setState({
              selectedTab: Math.round(
                event.nativeEvent.contentOffset.x /
                  Dimensions.get('window').width,
              ),
            });
            this.flatListMenuRef.scrollToIndex({
              animated: true,
              index: this.state.selectedTab,
            });
          }}
          data={this.state.layout}
          renderItem={this.renderScreens}
          keyExtractor={(item, index) => index}
          ref={(ref) => {
            this.flatListScreenRef = ref;
          }}
          pagingEnabled={true}
          scrollEventThrottle={16}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: Sizes.s10,
    padding: Sizes.s10,
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
  },
});
