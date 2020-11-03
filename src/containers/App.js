import React from 'react';
import { Button, Image, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginContainer from './Login/LoginContainer';
import demo from '../components/Custom/demo';
import demo2 from '../components/Custom/demo2';
import HomeContainer from './Home/HomeContainer';
import ActionContainer from './Action/ActionContainer';
import SettingContainer from './Setting/SettingContainer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import OrderItemContainer from './OrderItem/OrderItemContainer';
import AboutContainer from './Setting/AboutContainer';
import FindGuestContainer from './Action/FindGuestContainer';
import FindTransactionContainer from './Action/FindTransactionContainer';
import FillCodeContainer from './Login/FillCodeContainer';
import ConfirmApiContainer from './Login/ConfirmApiContainer';
import images from '../res/images';
import { Sizes } from '@dungdang/react-native-basic'
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    // <Button
    //   title="Go somewhere"
    //   onPress={() => {
    //     // Navigate using the `navigation` prop that you received
    //     navigation.navigate('Action');
    //   }}
    // />
    <View>
      <TouchableOpacity >
        <Image source={images.ic_change_out_let} resizeMode='contain' style={{ width: Sizes.s25 }} />
        <Text>Change outlet</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={images} />
        <Text>Change outlet</Text>
      </TouchableOpacity>
    </View>


  );
}
const MainStackScreen = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="FillCode">
      <Stack.Screen
        name="FillCode"
        component={FillCodeContainer}
        options={{}}
      />
      <Stack.Screen
        name="ConfirmApi"
        component={ConfirmApiContainer}
        options={{}}
      />

      <Stack.Screen name="Login" component={LoginContainer} options={{}} />
      <Stack.Screen name="Home" component={MainDraverScreen} options={{}} />
      <Stack.Screen
        name="FindTransaction"
        component={FindTransactionContainer}
        options={{}}
      />
      <Stack.Screen
        name="FindGuest"
        component={FindGuestContainer}
        options={{}}
      />
      <Stack.Screen name="About" component={AboutContainer} options={{}} />
      <Stack.Screen
        name="OrderItemScreen"
        component={OrderItemContainer}
        options={{}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const MainDraverScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Homee" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Homee" component={homeNavigation} />
      <Drawer.Screen name="Action" component={actionNavigation} />
      <Drawer.Screen name="ChangeOutLet" component={changeOutLetNavigation} />
    </Drawer.Navigator>
  )
}
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
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Action"
        component={actionNavigation}
        options={{
          tabBarLabel: 'Action',
          tabBarIcon: ({ color }) => (
            <Icon name="vector-combine" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={settingNavigation}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => <Icon2 name="cog" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

const homeNavigation = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeContainer} options={{}} />
    </Stack.Navigator>
  );
};

const actionNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Action">
      <Stack.Screen name="Action" component={ActionContainer} options={{}} />
    </Stack.Navigator>
  );
};
const changeOutLetNavigation = () => {
  <Stack.Navigator>
    {this.props.goback()}
  </Stack.Navigator>
}

const settingNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Setting">
      <Stack.Screen name="Setting" component={SettingContainer} options={{}} />
    </Stack.Navigator>
  );
};

export default MainStackScreen;
