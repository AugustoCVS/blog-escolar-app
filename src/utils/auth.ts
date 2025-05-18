import AsyncStorage from "@react-native-async-storage/async-storage";

const saveTokensOnStorage = async (id: string): Promise<void> => {
  await AsyncStorage.setItem("@token", id);
};

const getToken = async (): Promise<string | null> => {
  return await AsyncStorage.getItem("@token");
};

const removeTokensOnStorage = async (): Promise<void> => {
  await AsyncStorage.removeItem("@token");
};

export {
  getToken,
  removeTokensOnStorage, saveTokensOnStorage
};

