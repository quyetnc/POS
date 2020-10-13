import AsyncStorage from "@react-native-community/async-storage";

export const claims = async () => {
    const jsonValue = await AsyncStorage.getItem("dataStorage");
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
};
