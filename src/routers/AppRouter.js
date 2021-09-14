import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ForgotScreen,
  LoginScreen,
  SplashScreen,
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
import {useDispatch, useSelector} from 'react-redux';
import {getProfileServices} from '../services/endpoint/user';
import {getToken} from '../services/token/Token';
import { changeToken } from '../redux/action';

const Stack = createStackNavigator();

const AppRouter = () => {
  const [splash, setSplash] = useState(true);
  const {token, user} = useSelector(state => state);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const getStoredToken = async () => {
    try {
      const storedToken = await getToken();
      if (storedToken) {
        dispatch(changeToken(storedToken));
        getProfileServices(
          () => setSplash(false),
          e => setError(e.msg),
        );
      } else {
        setSplash(false);
        setError('Gagal');
      }
    } catch (err) {
      setError(err.msg);
      setSplash(false);
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getStoredToken;
    }, 3000);
  }, []);

  if (splash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        screenOptions={{animationEnabled: false}}>
        {!token ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen}/>
          </>
        ) : user.roles ? (
          
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
