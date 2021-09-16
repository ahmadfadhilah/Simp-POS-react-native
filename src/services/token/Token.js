import AsyncStorage from '@react-native-community/async-storage';

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) { 
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Log out')
  } catch (e) {
    console.log(e);
  }
};

export {storeToken ,getToken, removeToken};
