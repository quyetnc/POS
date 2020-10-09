import React from 'react';
import { Button, Image, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Sizes } from '@dungdang/react-native-basic'
export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.titileHeader}> Home </Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text> Home!</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create = ({
  header: {
    width: '100%',
    height: Sizes.s100,
    backgroundColor: '#4ebd73',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.s10,
  },
  titileHeader: {
    color: 'white',
    fontSize: Sizes.h28,
    fontWeight: 'bold'
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})