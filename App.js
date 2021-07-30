import React from 'react';
import { View, Text } from 'react-native';
import AppRouter from './src/routers/AppRouter';
import IndicatorBar from './src/components/IndicatorBar';
import AnimatedParallax from './src/components/AnimatedParallax';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <AnimatedParallax/>
    </View>
  )
}

export default App
