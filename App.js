import React from 'react';
import { View, Text } from 'react-native';
import AppRouter from './src/routers/AppRouter';
import Animatedclock from './src/components/Animated-clock'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Animatedclock/>
      {/* <AppRouter/> */}
    </View>
  )
}

export default App
