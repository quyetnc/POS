import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginContainer from './Login/LoginContainer';
import demo from '../components/Custom/demo';
import demo2 from '../components/Custom/demo2';
import HomeContainer from './Home/HomeContainer';
import ActionContainer from './Action/ActionContainer';
import SettingContainer from './Setting/SettingContainer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderItemContainer from './OrderItem/OrderItemContainer';
import AboutContainer from './Setting/AboutContainer';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainStackScreen = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginContainer} options={{}} />
      <Stack.Screen name="Home" component={MainTabScreen} options={{}} />
    </Stack.Navigator>
  </NavigationContainer>
);

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Homee"
      activeColor="#4dbd74"
      barStyle={{
        backgroundColor: '#fff',
        borderTopColor: 'gray',
        borderTopWidth: 1,
      }}>
      <Tab.Screen
        name="Homee"
        component={homeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Action"
        component={ActionContainer}
        options={{
          tabBarLabel: 'Action',
          tabBarIcon: ({color}) => (
            <Icon name="vector-combine" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={settingNavigation}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({color}) => (
            <Icon name="vector-combine" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const homeNavigation = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeContainer} options={{}} />
      <Stack.Screen
        name="OrderItemScreen"
        component={OrderItemContainer}
        options={{}}
      />
    </Stack.Navigator>
  );
};

const settingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingContainer} options={{}} />
      <Stack.Screen name="About" component={AboutContainer} options={{}} />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
