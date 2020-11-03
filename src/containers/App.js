import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet, Switch, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Sizes } from '@dungdang/react-native-basic';
import { createDrawerNavigator } from '@react-navigation/drawer';
import images from '../res/images';
import LoginContainer from './Login/LoginContainer';
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






const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();
const styles = StyleSheet.create({
  customMenu: {
    flexDirection: 'row',
    marginHorizontal: Sizes.s20,
    height: Sizes.s200,
    // borderBottomColor: '#E8E8E8',
    // borderBottomWidth: 1,
    alignItems: 'center'
  },
  headerMenu: {
    flexDirection: 'row',
    backgroundColor: '#1890FF',
    height: Sizes.s140,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewText: {
    flexDirection: 'row',
    height: Sizes.s200,
    width: '86.5%',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    alignItems: 'center'
  }
})
function CustomDrawerContent({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <View style={styles.headerMenu}>
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: Sizes.h32, }}>Mở Rộng</Text>
      </View>
      <TouchableOpacity style={styles.customMenu} onPress={() => navigation.goBack()}>
        <Image source={images.ic_change_out_let} resizeMode='center' style={{ width: Sizes.s100 }} />
        <View style={styles.viewText}>
          <Text style={{ marginLeft: Sizes.s15 }}>Change outlet</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FindTransaction")} style={styles.customMenu}>
        <Image source={images.ic_transaction} resizeMode='center' style={{ width: Sizes.s100 }} />
        <View style={styles.viewText}>
          <Text style={{ marginLeft: Sizes.s15 }}>Find transaction</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("FindGuest")} style={styles.customMenu}>
        <Image source={images.ic_find_guest} resizeMode='center' style={{ width: Sizes.s100 }} />
        <View style={styles.viewText}>
          <Text style={{ marginLeft: Sizes.s15 }}>Find guest</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")} style={styles.customMenu}>
        <Image source={images.ic_about} resizeMode='center' style={{ width: Sizes.s100 }} />
        <View style={styles.viewText}>
          <Text style={{ marginLeft: Sizes.s15 }}>About</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.customMenu}>
        <Switch
          trackColor={{ false: "#000", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <View style={styles.viewText}>
          <Text style={{ marginLeft: Sizes.s15 }}>Dark Mode</Text>
        </View>
      </View>
    </View>


  );
}
const MainStackScreen = () => (
  <NavigationContainer>
    <StatusBar barStyle='light-content' backgroundColor='#1890FF' />
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
      <Drawer.Screen name="About" component={AboutContainer} />
      <Drawer.Screen name="FindGuest" component={FindGuestContainer} />
      <Drawer.Screen name="FindTransaction" component={FindTransactionContainer} />
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
