import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceBodyCheck: '',
      macAddress: '',
      propertySelection: '',
      outletSelection: '',
      valueProperty: [],
      valueOutlet: [],
      passCode: '',
      visibleRegister: false,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eee',
          }}>
          <Text>Login!</Text>

          <Button
            onPress={() => this.props.navigation.navigate('MyModal')}
            title="Go to Main "
          />
        </View>
      </SafeAreaView>
    );
  }
}
