import AsyncStorage from '@react-native-community/async-storage';
export const API_URL = 'http://10.14.138.22/PosApiV2/api/';

export const userData = {
  PROPERTY_CODE: null,
  CASHIER_ID: '',
  POS_CASHIER_WORK_ID: 0,
  POS_WORKSTATION_ID: 0,
  WORKSTATION_ID: 0,
  TITLE: '',
  PASSCODE: null,
  CASHIER_DATE: '',
  TOKEN: null,
  ORDER_TYPE_ID: 0,
};

export const storeIsLogin = async (value) => {
  try {
    await AsyncStorage.setItem('@IsLogin', value);
    console.log('ok add');
  } catch (e) {
    // saving error
  }
};
export const getIsLogin = async () => {
  try {
    console.log('SHow');
    const value = await AsyncStorage.getItem('@IsLogin');
    if (value !== null) {
     return value
    } else return 'false'
  } catch (e) {
    return 'error';
  }
};
export const removeIsLogin = async () => {
  try {
    const value = await AsyncStorage.removeItem('@IsLogin');
    console.log('remove islogin done');
  } catch (e) {
    // error reading value
  }
};
