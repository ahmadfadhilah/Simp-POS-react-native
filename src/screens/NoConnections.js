import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from '../styles/MainStyles';

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
      <View style={styles.center}>
        <Text style={[styles.marginVS, styles.textMedium]}>
          Kesalahan Jaringan
        </Text>
      </View>
      <TouchableOpacity style={[styles.center, styles.container1]}>
        <Text style={styles.textH3}>Coba lagi ?</Text>
      </TouchableOpacity>
    </>
  );
};

export default NoConnections;
