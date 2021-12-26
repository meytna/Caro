import AsyncStorage from "@react-native-async-storage/async-storage"

const getStorage = async () => {
  return await AsyncStorage.getItem("Storage_lng");
}

export default getStorage()

