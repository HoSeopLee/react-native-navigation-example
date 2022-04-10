import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sub_Page from '../page/sub/Sub_Page';
import {
  NavigationHeader,
  NavigationHeaderButtonChange,
  NavigationHeaderButtonChangeNoOptionTitle,
  NoBottomTab,
  HomeMoveSubDetail,
} from '../page/sub';
import {Image} from 'react-native';
const Stack = createStackNavigator();

const SubTab = ({navigation, route}) => {
  return (
    <Stack.Navigator initialRouteName="Sub_Page">
      <Stack.Screen
        name="Sub_Page"
        component={Sub_Page}
        options={{headerShown: false}}
      />
      <Stack.Screen name="NavigationHeader" component={NavigationHeader} />
      <Stack.Screen
        options={{
          headerBackImage: () => {
            return (
              <Image
                source={require('../assets/images/back.png')}
                style={{width: 20, height: 20, marginLeft: 20}}
              />
            );
          },
          headerTruncatedBackTitle: true,
        }}
        name="NavigationHeaderButtonChange"
        component={NavigationHeaderButtonChange}
      />
      <Stack.Screen
        options={{
          headerBackImage: () => {
            return (
              <Image
                source={require('../assets/images/back.png')}
                style={{width: 20, height: 20, marginLeft: 20}}
              />
            );
          },
        }}
        name="NavigationHeaderButtonChangeNoOptionTitle"
        component={NavigationHeaderButtonChangeNoOptionTitle}
      />
      <Stack.Screen
        options={{
          tabBarStyle: {display: 'none'},
        }}
        name="NoBottomTab"
        component={NoBottomTab}
      />
      <Stack.Screen
        options={{
          tabBarStyle: {display: 'none'},
        }}
        name="HomeMoveSubDetail"
        component={HomeMoveSubDetail}
      />
    </Stack.Navigator>
  );
};

export default SubTab;
