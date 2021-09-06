import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgotScreen,
  LoginScreen,
  RegisterScreen,
  SplashScreen,
  VerifyScreen,
  CashierDashboardScreen,
  CartScreen,
  HistorySellingScreen,
  InvoiceScreen,
  MemberListScreen,
  TopUpScreen,
  ManagerDashboardScreen,
  AbsentReportScreen,
  AllicationScreen,
  DailyReportScreen,
  ItemListScreen,
  SettingScreen,
  UpdateProfile,
  NoConnections,
} from '../screens';
import {s} from '../styles/MainStyles';
// import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();

const AppRouter = () => {
  const [splash, setSplash] = useState(true);
  // const {token, user} = useSelector(state => state);
  // const [error, setError] = useState('');
  // const dispatch = useDispatch();

  // const getStoredToken = async () => {
  //   try {
  //     const storedToken = await getToken();
  //     if (storedToken) {
  //       dispatch(changeToken(storedToken));
  //       getProfileServices(
  //         () => setSplash(false),
  //         e => setError(e.message),
  //       );
  //     } else {
  //       setSplash(false);
  //       setError('Gagal');
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //     setSplash(false);
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getStoredToken;
  //   }, 3000);
  // }, []);

  // if (splash) {
  //   return <SplashScreen />;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        screenOptions={{animationEnabled: false}}>
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Forgot" component={ForgotScreen} />
        </>

        <>
          <Stack.Screen name="VerifyEmail" component={VerifyScreen} />

          <>
            <Stack.Screen
              name="CashierDashboard"
              component={CashierDashboardScreen}
            />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen
              name="HistorySelling"
              component={HistorySellingScreen}
            />
            <Stack.Screen name="MemberList" component={MemberListScreen} />
            <Stack.Screen name="TopUp" component={TopUpScreen} />
            <Stack.Screen name="Invoice" component={InvoiceScreen} />
          </>

          <>
            <Stack.Screen
              name="ManagerDashboard"
              component={ManagerDashboardScreen}
            />
            <Stack.Screen name="Allication" component={AllicationScreen} />
            <Stack.Screen name="DailyReport" component={DailyReportScreen} />
            <Stack.Screen name="AbsentReport" component={AbsentReportScreen} />
            <Stack.Screen name="ItemList" component={ItemListScreen} />
          </>

          <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
          <Stack.Screen name="Setting" component={SettingScreen} />
        </>

        <Stack.Screen name="NoConnections" component={NoConnections} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
