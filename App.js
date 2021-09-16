import React from 'react';
// import {Provider} from 'react-redux';
import AppRouter from './src/routers/AppRouter';
// import store from './src/redux/store';
import {LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return <AppRouter />;
};

export default App;

