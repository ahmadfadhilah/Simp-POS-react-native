import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/MainStyles';
import {TouchableOpacity} from 'react-native';

const NoConnections = () => {
  return (
    <>
      <View style={styles.flex}>
        <StatusBar auto />
        <LottieView
          source={require('../assets/lottie/offline.json')}
          autoPlay
          loop
        />
      </View>
      <TouchableOpacity style={[styles.center, styles.container]} >
        <Text style={[styles.marginVS, styles.textMedium]}>Kesalahan Jaringan</Text>
        <Text style={styles.textH3}>Coba lagi ?</Text>
      </TouchableOpacity>
    </>
  );
};

export default NoConnections;
