import AsyncStorage from '@react-native-async-storage/async-storage';

async function getItem(key: string) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

async function setItem(key: string, value: any) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

async function removeItem(key: string) {
  return AsyncStorage.removeItem(key);
}

const storage = {getItem, setItem, removeItem};

export default storage;
