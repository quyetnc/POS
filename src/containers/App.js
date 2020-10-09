import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoginContainer from './Login/LoginContainer';
import Home from '../components/home/Home';
import ActionContainer from './Action/ActionContainer';
import SettingContainer from './Setting/SettingContainer';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Action: ActionContainer,
  Setting: SettingContainer,
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
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
