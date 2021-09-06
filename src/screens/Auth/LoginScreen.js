import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextView from '../../components/TextView';
import ButtonView from '../../components/ButtonView';

const LoginScreen = () => {
  const [secure, setSecure] = useState(true);
  const [isEnabled, setisEnabled] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="keyboard-arrow-left" size={25} color="gray" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bodyContent}>
        <Text style={styles.largeText}>Welcome Back</Text>
        <Text style={styles.smallText}>
          Log into your account &amp; manage {'\n'}your tasks
        </Text>
        <View style={{marginVertical: 5}}>
          <TextView
            placeholder="Username"
            icon="person-outline"
          />
        </View>
        <View>
          <TextView
            placeholder="Password"
            name={secure ? 'eye-off' : 'eye'}
            secure={secure}
            onIconPress={() => setSecure(!secure)}
            icon="ios-lock-closed-outline"
          />
        </View>

        <View style={styles.savePwdRow}>
          <Text style={{color: isEnabled ? 'green' : 'gray'}}>Save Password</Text>
          <Switch 
            trackColor={{false: 'grey', true: 'green'}}
            thumbColor={isEnabled ? 'skyblue' : 'white'}
            onValueChange={() => setisEnabled(!isEnabled)}
            value={{isEnabled}}
          />
        </View>
        <View>
          <ButtonView 
            title="Login"
            dark
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 40,
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  backText: {
    fontSize: 17,
    marginLeft: 10,
    color: 'gray',
  },
  bodyContent: {
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  largeText: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 32,
    marginBottom: 10,
  },
  smallText: {
    fontSize: 14,
    color: '#a6a6a6',
    fontWeight: '500',
    marginBottom: 40,
  },
  inputRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 35,
    height: 40,
  },
  textInput: {fontSize: 17, flex: 1, color: '#000', height: 45},
  savePwdRow: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});
