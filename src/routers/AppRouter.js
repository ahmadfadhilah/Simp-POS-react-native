import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
  TabUser,
  NoConnections,
} from '../screens';
import {s} from '../styles/MainStyles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode={false}
        screenOptions={{animationEnabled: false}}>
        <>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
        <>
          <>
            <Stack.Screen name="Cashier">
              <Tab.Navigator 
                tabBar={props => <TabUser {...props}/>}>
                <Tab.Screen 
                  name="CashierDashboardScreen"
                  component={CashierDashboardScreen}
                />
              </Tab.Navigator>
            </Stack.Screen>
            <Stack.Screen name="CartScreen" component={CartScreen}/>
            <Stack.Screen name="HistorySellingScreen" component={HistorySellingScreen}/>
            <Stack.Screen name="InvoiceScreen" component={InvoiceScreen}/>
            <Stack.Screen name="MemberListScreen" component={MemberListScreen}/>
            <Stack.Screen name="TopUpScreen" component={TopUpScreen}/>
          </>
          <>
            <Stack.Screen name="Manager">
              <Tab.Navigator
                tabBar={props => <TabUser {...props}/>}>
                <Tab.Screen 
                  name="ManagerDashboardScreen"
                  component={ManagerDashboardScreen}
                />
              </Tab.Navigator>
            </Stack.Screen>
            <Stack.Screen name="AbsentReportScreen" component={AbsentReportScreen}/>
            <Stack.Screen name="AllicationScreen" component={AllicationScreen}/>
            <Stack.Screen name="DailyReportScreen" component={DailyReportScreen}/>
            <Stack.Screen name="ItemListScreen" component={ItemListScreen}/>
          </>
          <Stack.Screen name="SettingScreen" component={SettingScreen}/>
          <Stack.Screen name="UpdateProfile" component={UpdateProfile}/>
        </>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
