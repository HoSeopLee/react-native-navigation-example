import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNav from './BottomNav';

const Drawer = createDrawerNavigator();

const RootNav = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        headerShown={false}
        drawerType={'front'}
        drawerPosition={'left'}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen
          headerShown={false}
          name="bottom"
          component={BottomNav}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
