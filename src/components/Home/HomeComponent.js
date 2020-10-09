import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic'
import { colors } from '../../res/values/styles/color'
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Icon name='sticky-note' size={Sizes.s40} style={{ marginLeft: Sizes.s20 }} />
          <Text>Home</Text>
          <Icon name='sticky-note' size={Sizes.s40} style={{ marginRight: Sizes.s20 }} />
        </SafeAreaView>
        <View style={styles.content}>
          <Text>Content</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: '7%',
    backgroundColor: colors.blue2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});