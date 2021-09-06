import React from 'react';
import {View, Text, TouchableNativeFeedback} from 'react-native';
import {s} from '../styles/MainStyles';
import LottieView from 'lottie-react-native';

const ButtonView = ({onPress, loading, title, dark, disabled}) => {
    return (
      <TouchableNativeFeedback
        disabled={loading ? true : disabled}
        onPress={() => (onPress ? onPress() : null)}>
        <View
          style={[
            s.button,
            dark ? s.backgroundPrimary : s.backgroundSecondary,
          ]}>
          {loading ? (
            <LottieView
              source={require('../assets/lottie/8308-loading.json')}
              autoPlay
              loop
              style={s.lottieButton}
            />
          ) : (
            <Text
              style={[
                s.textMedium,
                s.textUppercase,
                s.textCenter,
                s.textWhite,
              ]}>
              {title}
            </Text>
          )}
        </View>
      </TouchableNativeFeedback>
    );
  };
  
  export default ButtonView;
