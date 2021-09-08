import * as React from 'react';
import {Text, StatusBar, View, StyleSheet} from 'react-native';
import TextAnimator from '../../components/TextAnimator';

export default function App() {
  const _onFinish = () => {
    // Alert.alert('Animation', 'It is done!');
  };
  return (
    <View style={s.container}>
      <StatusBar hidden />
      <Text style={s.text}>Simp</Text>
      <TextAnimator
        content="System management Point of cell️️️"
        textStyle={s.textStyle}
        style={s.containerStyle}
        duration={800}
        onFinish={_onFinish}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerStyle: {},
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Menlo',
    marginBottom: 14,
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'LobsterTwo-Bold'
  }
});
