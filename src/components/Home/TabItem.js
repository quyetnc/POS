import React, {Component} from 'react';
import {FlatList, SafeAreaView, View, Text, StyleSheet} from 'react-native';
// import Table from "../table";
import Table from '../Home/TableComponent';

class TabItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.tableData.filter(
        (item) => item.LOCATION_ID === this.props.tabData.LOCATION_ID,
      ),
      //data: []
    };
  }

  // componentDidMount() {
  //   console.log("this.props.tabData: ", this.props.tabData);
  //   this.loadTable();
  // }

  // loadTable = () => {
  //   TableService.getDataPosPlan(this.props.tabData.LOCATION_ID).then(res => {
  //     // console.log("TABLE: ", res);
  //     this.setState({
  //       data: res.data
  //     });
  //   });
  // };

  renderItem = ({item, index}) => {
    return (
      // <Table
      //   {...this.props}
      //   style={{ borderRadius: 10 }}
      //   name={this.props.tabData.NAME}
      //   item={item}
      //   key={item.DINING_TABLE_ID}
      // />

      <Table
        {...this.props}
        //  navigation={this.props.navigation}
        item={item}
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
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tabData.LOCATION_ID === this.props.tabData.LOCATION_ID)
      return false;

    return true;
  }

  render() {
    return (
      <SafeAreaView style={stylesCus.safeAreaView}>
        {this.state.data.length > 0 ? (
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            numColumns={2}
            keyExtractor={(item) => item.DINING_TABLE_ID}
            refreshing={true}
          />
        ) : (
          <View style={stylesCus.viewStyle}>
            <Text style={stylesCus.textStyle}>Empty table</Text>
          </View>
        )}
      </SafeAreaView>
    );
  }
}

export default TabItem;

const stylesCus = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 24,
  },
});
