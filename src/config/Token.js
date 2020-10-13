import AsyncStorage from "@react-native-community/async-storage";

export const Token = async () => {
    const jsonValue = await AsyncStorage.getItem("dataStorage");
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
};
 