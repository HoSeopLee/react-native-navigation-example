import React, {useEffect, useState} from 'react';
import {SafeAreaView, Pressable, Text} from 'react-native';

const Home_Page = props => {
  const {navigation} = props;

  const list = [
    {
      index: 0,
      navigation: 'DefaultNavigation',
      params: 'DefaultNavigation_Title',
    },
    {
      index: 1,
      navigation: 'ForBottomSheetAndroid',
      params: 'ForBottomSheetAndroid_Title',
    },
    {
      index: 2,
      navigation: 'ForFadeFromBottomAndroid',
      params: 'ForFadeFromBottomAndroid_Title',
    },
    {
      index: 3,
      navigation: 'ForFadeFromCenter',
      params: 'ForFadeFromCenter_Title',
    },
    {
      index: 4,
      navigation: 'ForHorizontalIOS',
      params: 'ForHorizontalIOS_Title',
    },
    {
      index: 5,
      navigation: 'ForModalPresentationIOS',
      params: 'ForModalPresentationIOS_Title',
    },
    {
      index: 6,
      navigation: 'ForNoAnimation',
      params: 'ForNoAnimation_Title',
    },
    {
      index: 7,
      navigation: 'ForRevealFromBottomAndroid',
      params: 'ForRevealFromBottomAndroid_Title',
    },
    {
      index: 8,
      navigation: 'ForScaleFromCenterAndroid',
      params: 'ForScaleFromCenterAndroid_Title',
    },
    {
      index: 9,
      navigation: 'ForVerticalIOS',
      params: 'ForVerticalIOS_Title',
    },
    {
      index: 10,
      navigation: 'SubDetail',
      params: 'SubDetail_Title',
    },
    {
      index: 11,
      navigation: 'HomeMoveSubDetail',
      params: 'HomeMoveSubDetail_Title',
      type: 2,
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {list.map((element, key) => {
        return (
          <Pressable
            key={element.index + key}
            onPress={async () => {
              if (element?.type === 2) {
                navigation.navigate('SubTab', {screen: 'HomeMoveSubDetail'});
              } else {
                navigation.navigate(element.navigation, {
                  title: element.params,
                });
              }
            }}
            style={({pressed}) => [
              {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 30,
                opacity: pressed ? 0.5 : 1,
                marginTop: 5,
              },
            ]}>
            {({pressed}) => <Text>{element.navigation}</Text>}
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default Home_Page;
