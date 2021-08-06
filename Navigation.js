import * as React from 'react';
import {Dimensions, StatusBar} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  DashboardScreen,
  FeaturesScreen,
  ToolsScreen,
  ServicesScreen,
  HelpScreen,
  QrScreen,
  ContactScreen,
} from './Screens';
import CustomDrawer from './CustomDrawer';

const {width} = Dimensions.get('screen');
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Drawer.Navigator
        initialRouteName={'DashboardScreen'}
        drawerStyle={{
          backgroundColor: 'transparent',
          width: 0,
        }}
        overlayColor="transparent"
        drawerType="permanent"
        drawerContent={props => {
          return (
            <CustomDrawer
              navigation={props.navigation}
              routes={props.state.routeNames[props.state.index]}
            />
          );
        }}>
        <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
        <Drawer.Screen name="FeaturesScreen" component={FeaturesScreen} />
        <Drawer.Screen name="ToolsScreen" component={ToolsScreen} />
        <Drawer.Screen name="ServicesScreen" component={ServicesScreen} />
        <Drawer.Screen name="HelpScreen" component={HelpScreen} />
        <Drawer.Screen name="QrScreen" component={QrScreen} />
        <Drawer.Screen name="ContactScreen" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
