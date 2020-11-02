import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Sizes} from '@dungdang/react-native-basic';

export default class FillCodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {{width: 200, height: 10, justifyContent:'center'}}>
          <View style = {{width:'100%', height: 5, backgroundColor: '#00000050'}} />
          <View style = {{position: 'absolute', height: 10, width: 10, borderRadius: 5, backgroundColor: '#000000'}} />
          <View style = {{position: 'absolute', height: 10, width: 10, borderRadius: 5, backgroundColor: '#000000', alignSelf: 'center'}} />
          <View style = {{position: 'absolute', height: 10, width: 10, borderRadius: 5, backgroundColor: '#000000', alignSelf: 'flex-end'}} />
        </View>
        <View style = {{width: 200, height: 10, justifyContent:'center', position:'absolute'}}>
          <View style = {{width: 200, height: 5, backgroundColor: 'green'}} />
          <View style = {{position: 'absolute', height: 10, width: 10, borderRadius: 5, backgroundColor: 'green'}} />
          <View style = {{position: 'absolute', height: 10, width: 10, borderRadius: 5, backgroundColor: 'green', left: 95}} />
          <View style = {{position: 'absolute', height: 10, width: 10, borderRadius: 5, backgroundColor: 'green', left: 190}} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  lineBackground :{
    height: Sizes.s40, width: '30%', justifyContent: 'center'
  }
});
