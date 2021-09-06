import React from 'react';
import { StatusBar } from 'react-native';
import {View, Text} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <StatusBar hidden/>
      <Text style={{fontSize: 40, fontWeight: 'bold', color: '#74cccc'}}>gosimp app</Text>
    </View>
  );
};

export default SplashScreen;
