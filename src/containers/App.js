import React from 'react';
import { createAppContainer } from 'react-navigation'; // 1.0.0-beta.27
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginContainer from './Login/LoginContainer';
import HomeContainer from './Home/HomeContainer';
import ActionContainer from './Action/ActionContainer';
import SettingContainer from './Setting/SettingContainer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OrderItemContainer from './OrderItem/OrderItemContainer';
import AboutContainer from './Setting/AboutContainer'
import FindGuestContainer from './Action/FindGuestContainer';
import FindTransactionContainer from './Action/FindTransactionContainer';


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

  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const ActionStack = createStackNavigator({
  ActionContainer: ActionContainer,
},
  {
    initialRouteName: 'ActionContainer',
    mode: 'modal',
    headerMode: 'none',
  })

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Trang chủ',
      tabBarIcon: () => <Icon name="home" size={20} color="#4dbd73" />,
    },
  },
  Action: {
    screen: ActionStack,
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
    FindTransaction: FindTransactionContainer,
    FindGuest: FindGuestContainer,
    About: AboutContainer
  },
  {
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
