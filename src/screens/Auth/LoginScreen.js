// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   Switch,
//   StyleSheet,
//   ToastAndroid,
//   StatusBar,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import TextView from '../../components/TextView';
// import ButtonView from '../../components/ButtonView';
// import {useDispatch} from 'react-redux';
// import {loginServices} from '../../services/endpoint/auth'
// import { changeToken, setUser } from '../../redux/action';

// const LoginScreen = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [secure, setSecure] = useState(true);
//   const [isEnabled, setisEnabled] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const dispatch = useDispatch

//   const onClickLogin = async () => {
//     if (email === '' || password === '') {
//       ToastAndroid.show('Harap isi dengan benar', ToastAndroid.LONG);
//     } else {
//       setLoading(true);
//       try {
//         const {data} = await loginServices(email, password ? 1 : 0);
//         setLoading(false);
//         if (data === '') {
//           dispatch(setUser(data.data.user));
//           dispatch(changeToken(data.data.token));
//         }
//       } catch (error) {
//         setLoading(false);
//         ToastAndroid.show(error, ToastAndroid.LONG);
//       }
//     }
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar translucent backgroundColor="transparent"/>
//       <View>
//         <TouchableOpacity style={styles.backButton}>
//           <Text style={styles.largeText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.bodyContent}>
//         <Text style={styles.largeText}>Welcome Back</Text>
//         <Text style={styles.smallText}>
//           Log into your account &amp; manage {'\n'}your tasks
//         </Text>
//         <View style={{marginVertical: 5}}>
//           <TextView
//             placeholder="Username"
//             icon="person-outline"
//           />
//         </View>
//         <View>
//           <TextView
//             placeholder="Password"
//             name={secure ? 'eye-off' : 'eye'}
//             secure={secure}
//             onIconPress={() => setSecure(!secure)}
//             icon="ios-lock-closed-outline"
//           />
//         </View>

//         <View style={styles.savePwdRow}>
//           <Text style={{color: isEnabled ? 'green' : 'gray'}}>Save Password</Text>
//           <Switch 
//             trackColor={{false: 'grey', true: 'green'}}
//             thumbColor={isEnabled ? 'skyblue' : 'white'}
//             onValueChange={() => setisEnabled(!isEnabled)}
//             value={{isEnabled}}
//           />
//         </View>
//         <View>
//           <ButtonView 
//             title="Login"
//             dark
//             loading={loading}
//             onPress={onClickLogin}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingBottom: 40,
//   },
//   backButton: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingVertical: 16,
//     paddingHorizontal: 20,
//   },
//   backText: {
//     fontSize: 17,
//     marginLeft: 10,
//     color: 'gray',
//   },
//   bodyContent: {
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   largeText: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     // lineHeight: 32,
//     marginBottom: 10,
//   },
//   smallText: {
//     fontSize: 14,
//     color: '#a6a6a6',
//     fontWeight: '500',
//     marginBottom: 40,
//   },
//   inputRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     marginBottom: 35,
//     height: 40,
//   },
//   textInput: {fontSize: 17, flex: 1, color: '#000', height: 45},
//   savePwdRow: {
//     marginTop: 20,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 40,
//   },
// });

import React from 'react'
import { View, Text } from 'react-native'

const LoginScreen = () => {
  return (
    <View>
      <Text>sss</Text>
    </View>
  )
}

export default LoginScreen
