import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import SubStack from './SubStack';

const Tab = createBottomTabNavigator();

const BottomNav = ({navigation, route}) => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen headerShown={false} name="HomeStack" component={HomeStack} />
      <Tab.Screen headerShown={false} name="SubTab" component={SubStack} />
    </Tab.Navigator>
  );
};

export default BottomNav;
