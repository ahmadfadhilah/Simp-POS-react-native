import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      {/* <StatusBar/> */}
      <LottieView
        source={require('../../assets/lottie/70634-concentric-snakes-loader.json')}
        autoPlay
        loop
        style={{width: '55%', height: '55%', backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center'}}
      />
    </View>
  );
};

export default SplashScreen;
