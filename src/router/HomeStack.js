import React from 'react';
import {Home_Page} from '../page';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  DefaultNavigation,
  ForBottomSheetAndroid,
  ForFadeFromBottomAndroid,
  ForFadeFromCenter,
  ForHorizontalIOS,
  ForModalPresentationIOS,
  ForNoAnimation,
  ForRevealFromBottomAndroid,
  ForScaleFromCenterAndroid,
  ForVerticalIOS,
} from '../page/home';

const Stack = createStackNavigator();

const MainStack = ({navigation, route}) => {
  const forFade = ({current}) => ({
    cardStyle: {opacity: current.progress},
  });
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home_Page">
      <Stack.Screen
        name="Home_Page"
        component={Home_Page}
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="DefaultNavigation"
        component={DefaultNavigation}
      />
      <Stack.Screen
        headerShown={false}
        name="ForBottomSheetAndroid"
        component={ForBottomSheetAndroid}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForFadeFromBottomAndroid"
        component={ForFadeFromBottomAndroid}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForFadeFromCenter"
        component={ForFadeFromCenter}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForHorizontalIOS"
        component={ForHorizontalIOS}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForModalPresentationIOS"
        component={ForModalPresentationIOS}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForNoAnimation"
        component={ForNoAnimation}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForRevealFromBottomAndroid"
        component={ForRevealFromBottomAndroid}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForScaleFromCenterAndroid"
        component={ForScaleFromCenterAndroid}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forScaleFromCenterAndroid,
        }}
      />
      <Stack.Screen
        headerShown={false}
        name="ForVerticalIOS"
        component={ForVerticalIOS}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
