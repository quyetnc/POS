import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginContainer from './Login/LoginContainer';
import HomeContainer from './Home/HomeContainer';
import ActionContainer from './Action/ActionContainer';
import SettingContainer from './Setting/SettingContainer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OrderItemContainer from './OrderItem/OrderItemContainer';
import AsyncStorage from '@react-native-community/async-storage';
import AboutContainer from './Setting/AboutContainer'
const HomeStack = createStackNavigator(
  {
    HomeMain: {
      screen: HomeContainer,
    },
    OrderItem: {
      screen: OrderItemContainer,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);


const SettingStack = createStackNavigator(
  {
    SettingOption: {
      screen: SettingContainer,
    },
    About: {
      screen: AboutContainer,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Trang chủ',
      tabBarIcon: () => <Icon name="home" size={20} color="#4dbd73" />,
    },
  },
  Action: {
    screen: ActionContainer,
    navigationOptions: {
      tabBarLabel: 'Mở rộng',
      tabBarIcon: () => <Icon name="ellipsis-h" size={20} color="#4dbd73" />,
    },
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: 'Hệ thống',
      tabBarIcon: () => <Icon name="cog" size={20} color="#4dbd73" />,
    },
  },
});
const HomeTab = createAppContainer(TabNavigator);

 
const RootStack = createStackNavigator(
  {
    Login: {
      screen: LoginContainer,
    },

    Home: {
      screen: HomeTab,
    },
  },
  {
    initialRouteName : 'Login',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
